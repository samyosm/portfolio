import Highlighter from "react-highlight-words";

export interface HighlightProps {
  content: string;
}
export function Highlight(props: HighlightProps) {
  return (
    <Highlighter
      highlightTag={Tag}
      searchWords={[/\*([^]*)\*/]}
      textToHighlight={props.content}
    />
  );
}

function Tag(props: { children: string }) {
  const children = props.children.replaceAll("*", "");
  return <span className="text-indigo-500">{children}</span>;
}
