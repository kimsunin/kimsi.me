import Markdown from "react-markdown";
// 플러그인
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
// 스타일
import "./MarkDownView.css";

type PropsType = {
  post: string | undefined;
};

function MarkDownView({ post }: PropsType) {
  return (
    <Markdown
      className="markdown-view"
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[[remarkGfm]]}
      components={{ a: (props: any) => <a target="_blank" {...props} /> }}
    >
      {post}
    </Markdown>
  );
}

export default MarkDownView;
