import Link from "next/link";
import "./BlogContentListTitle.css";

type PropsType = {
  title: string;
  href?: string;
};

function BlogContentListTitle({ title, href }: PropsType) {
  return (
    <div className="blog-list-title">
      <h3>{title}</h3>
      {href && <Link href={href}>더보기</Link>}
    </div>
  );
}

export default BlogContentListTitle;
