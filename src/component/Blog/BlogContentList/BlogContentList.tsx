import Link from "next/link";
import { CustomImage } from "@/component/index";
import { BlogContentListType } from "@/type/BlogType";
import "./BlogContentList.css";

type PropsType = { type: string; data: BlogContentListType | undefined };

function BlogContentList({ type, data }: PropsType) {
  const blogContentList = data?.map((item, index) => (
    <li key={index} className="rotate-r">
      <Link href={`/blog/detail/${type}/${item.id}`}>
        <CustomImage src={item.img_url} />
        <div>
          <h4>{item.title}</h4>
          <p>{item.sub_title}</p>
          <span>{item.date}</span>
        </div>
      </Link>
    </li>
  ));

  return <ul className="blog-list">{blogContentList}</ul>;
}

export default BlogContentList;
