import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { ListNode, ListItemNode } from "@lexical/list";

import { useEffect, useRef, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import FloatingTextFormatToolbarPlugin from "./LexicalEditor/CustomPlugins/FloatingTextFormatPlugin/FloatinPlugin";
import lexicalEditorTheme from "../../Theme/LexicalEditorTheme";
import { LexicalEditorProps } from "../../Interface/Section";
import { useSelector } from "react-redux";
import { EditorState, createEditor } from "lexical";
import { ToolbarPlugin } from "./LexicalEditor/CustomPlugins/ToolbarPlugin/ToolbarPlugin";

export default function LexicalTextarea({
  styles,
  placeholder,
  handleContent,
  prevContent,
  isCompEditable,
}: LexicalEditorProps) {
  const [editorState, setEditorState] = useState();
  const [isEditable, setIsEditable] = useState(true);
  const lexicalEditor = useSelector((store) => store.lexicalEditor);
  console.log(lexicalEditor.isEditable);

  const initialConfig = {
    namespace: "MyEditor",
    theme: lexicalEditorTheme,
    editorState: true,
    editable: isEditable,
    onError(error: Error) {
      throw error;
    },
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
  };

  useEffect(() => {
    const editor = createEditor(initialConfig);
    editor._editable = isCompEditable;
    console.log(editor, editorState, isCompEditable);
    const isEditable = editor.isEditable();
    console.log(isEditable);
  }, [isCompEditable]);

  function MyOnChangePlugin(props: {
    onChange: (editorState: EditorState) => void;
  }): null {
    const [editor] = useLexicalComposerContext();
    const { onChange } = props;
    useEffect(() => {
      // const removeTextContentListener = editor.registerTextContentListener(
      //   (textContent) => {
      //     const currTextContent = textContent;
      //     handleContent(textContent);
      //     console.log(currTextContent);
      //     ///causing placeholder to stay
      //   }
      // );
      // removeTextContentListener();

      return editor.registerUpdateListener(({ editorState }) => {
        onChange(editorState);
      });
    }, [onChange, editor]);
  }

  // useEffect(() => {
  //   if (prevContent) {
  //     setEditorState(prevContent);
  //   }
  // }, []);

  // const editorStateRef = useRef();
  function onChange(editorState: EditorState) {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  }

  // function MyOnChangePlugin({ onChange }) {
  //   const [editor] = useLexicalComposerContext();
  //   useEffect(() => {
  //     const removeTextContentListener = editor.registerTextContentListener(
  //       (textContent) => {
  //         const currTextContent = textContent;
  //         handleContent(textContent);
  //         ///causing placeholder to stay
  //       }
  //     );

  //     return editor.registerUpdateListener(({ editorState }) => {
  //       console.log(editorState);
  //       onChange(editorState);
  //     });
  //   }, [editor, onChange]);
  //   return null;
  // }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      {isCompEditable ? <ToolbarPlugin /> : null}
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
          <FloatingTextFormatToolbarPlugin />
          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
