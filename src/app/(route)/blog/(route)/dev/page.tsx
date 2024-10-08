"use client";
import React from "react";
import BlogContentList from "@/component/blogContentList/BlogContentList";
import { BlogContentListType, BlogType } from "@/type/BlogType";

function Page() {
  const [data, setData] = React.useState<BlogContentListType>();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    getData().then((res: BlogType) => {
      if (res.status == 200) {
        setData(res.data);
        setVisible(true);
      }
    });
  }, []);

  return (
    <section className={visible ? "is-visible" : "is-invisible"}>
      <article className="list-article">
        <h4>develop - 개발에 관한 기록</h4>
        <div>
          {data ? (
            <BlogContentList type="dev" data={data} />
          ) : (
            <p>글이 존재하지 않습니다.</p>
          )}
        </div>
      </article>
    </section>
  );
}

const getData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "blog/list/deve", {
    cache: "no-store",
  });
  return await res.json();
};

export default Page;
