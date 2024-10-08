"use client";
import BlogContentList from "@/component/blogContentList/BlogContentList";
import { BlogContentListType, BlogType } from "@/type/BlogType";
import React from "react";

function Page() {
  const [data, setData] = React.useState<BlogContentListType>();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    getData().then((res: BlogType) => {
      if (res.status == 200) {
        setData(res.data);
        setVisible(true);
      } else {
        setVisible(true);
      }
    });
  }, []);

  return (
    <section className={visible ? "is-visible" : "is-invisible"}>
      <article className="list-article">
        <h4>note - 제약없이 자유로운 기록</h4>
        <div>
          {data ? (
            <BlogContentList type="note" data={data} />
          ) : (
            <p>글이 존재하지 않습니다.</p>
          )}
        </div>
      </article>
    </section>
  );
}

const getData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "blog/list/note", {
    cache: "no-store",
  });
  return await res.json();
};

export default Page;
