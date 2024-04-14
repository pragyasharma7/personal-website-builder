import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import FloatingTextFormatToolbarPlugin from "./CustomPlugins/FloatingTextFormatPlugin/FloatinPlugin";
import { LexicalEditorProps } from "../../../Interface/Section";
import { useSelector } from "react-redux";
import { EditorState } from "lexical";
import { ToolbarPlugin } from "./CustomPlugins/ToolbarPlugin/ToolbarPlugin";
import { lexicalEditorConfig } from "../../../Config/LexicalEditorConfig";

export default function LexicalTextarea({
  styles,
  placeholder,
  isCompEditable,
  isToolbarVisible,
}: LexicalEditorProps) {
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);

  function MyOnChangePlugin(props: {
    onChange: (editorState: EditorState) => void;
  }): null {
    const [editor] = useLexicalComposerContext();
    const { onChange } = props;

    useEffect(() => {
      if (!lexicalEditableSlice.isEditable)
        editor.setEditable(lexicalEditableSlice.isEditable);
      else if (lexicalEditableSlice.isEditable)
        editor.setEditable(lexicalEditableSlice.isEditable);
      else editor.setEditable(lexicalEditableSlice.isEditable);

      return editor.registerUpdateListener(({ editorState }) => {
        onChange(editorState);
      });
    }, [onChange, editor, isCompEditable, lexicalEditableSlice.isEditable]);
  }

  function onChange(editorState: EditorState) {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  }

  return (
    <LexicalComposer initialConfig={lexicalEditorConfig}>
      {isToolbarVisible && isCompEditable ? <ToolbarPlugin /> : null}
      <div className="editor-container m-0 max-w-none">
        <div className="editor-inner bg-bgHomepage leading-none">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="editor-input m-0" style={styles} />
            }
            placeholder={
              <div
                className="editor-placeholder text-7xl text-left"
                style={styles}
              >
                {placeholder}
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MyOnChangePlugin
            onChange={(editorState) => {
              console.log(editorState);
            }}
          />
          <ListPlugin />
          <LinkPlugin />
          {isCompEditable && lexicalEditableSlice.isEditable ? (
            <FloatingTextFormatToolbarPlugin />
          ) : null}
          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}