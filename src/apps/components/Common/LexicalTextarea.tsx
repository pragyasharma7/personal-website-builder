import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

import ToolbarPlugin from "../../plugins/ToolbarPlugin";
import { useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [],
  onError(error: Error) {
    throw error;
  },
};

export default function LexicalTextarea(props) {
  const [editorState, setEditorState] = useState();
  function onChange(editorState) {
    // console.log(editorState, 'edi')
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
    // console.log(editorState, JSON.stringify(editorStateJSON));
  }

  function MyOnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        onChange(editorState);
      });
    }, [editor, onChange]);
    return null;
  }

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container m-0 max-w-none mt-7">
        {/* <ToolbarPlugin /> */}
        <div className="editor-inner bg-bgHomepage leading-none">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input m-0"
                style={props.styles}
              />
            }
            placeholder={
              <div
                className="editor-placeholder text-7xl text-left"
                style={props.styles}
              >
                Click to add title...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MyOnChangePlugin onChange={onChange} />
          {/* <OnChangePlugin onChange={onChange} /> */}

          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
