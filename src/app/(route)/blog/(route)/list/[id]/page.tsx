"use client";
import React from "react";
import BlogContentList from "@/component/BlogContentList/BlogContentList";
import { BlogContentListType, BlogType } from "@/type/BlogType";

function Page({ params }: { params: { id: string } }) {
  const [data, setData] = React.useState<BlogContentListType>();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    getData(params.id).then((res: BlogType) => {
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
        <h4>
          {params.id == "dev" && "develop - 개발에 관한 기록"}
          {params.id == "engin" && "engineering - 공학에 관한 기록"}
          {params.id == "note" && "note - 제약없이 자유로운 기록"}
        </h4>
        <div>
          {data ? (
            <BlogContentList type={params.id} data={data} />
          ) : (
            <p>글이 존재하지 않습니다.</p>
          )}
        </div>
      </article>
    </section>
  );
}

const getData = async (id: string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "blog/list/" + id);
  return await res.json();
};

export default Page;
