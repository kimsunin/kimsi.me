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
        <h4>engineering - 공학에 관한 기록</h4>
        <div>
          {data ? (
            <BlogContentList type="engin" data={data} />
          ) : (
            <p>글지 존재하지 않습니다.</p>
          )}
        </div>
      </article>
    </section>
  );
}

const getData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "blog/list/engin", {
    cache: "no-store",
  });
  return await res.json();
};

export default Page;
