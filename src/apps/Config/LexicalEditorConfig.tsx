import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { ListNode, ListItemNode } from "@lexical/list";
import lexicalEditorTheme from "../Theme/LexicalEditorTheme";

function onError(error) {
  console.error(error);
}

export const lexicalEditorConfig = {
  namespace: "MyEditor",
  theme: lexicalEditorTheme,
  editorState: true,
  editable: true,

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
