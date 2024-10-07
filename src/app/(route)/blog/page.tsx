"use client";
import React from "react";
import BlogContentList from "@/component/blogContentList/BlogContentList";
import { BlogContentGroupListType, BlogType } from "@/type/BlogType";
import Link from "next/link";

function Page() {
  const [data, setData] = React.useState<BlogContentGroupListType>();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    getData().then((res: BlogType) => {
      console.log(res);
      if (res.status == 200) {
        setData(res.data);
        setVisible(true);
      }
    });
  }, []);

  return (
    <section className={visible ? "is-visible" : "is-invisible"}>
      <article className="list-article">
        <div>
          <h4>develop - 개발에 관한 기록</h4>
          <Link href="/blog/dev">더보기</Link>
        </div>
        <div>
          {data?.dev.length ? (
            <BlogContentList type="dev" data={data?.dev} />
          ) : (
            <p>글이 존재하지 않습니다.</p>
          )}
        </div>
      </article>
      <article className="list-article">
        <div>
          <h4>engineering - 공학에 관한 기록</h4>
          <Link href="/blog/engin">더보기</Link>
        </div>
        <div>
          {data?.engin.length ? (
            <BlogContentList type="engin" data={data?.engin} />
          ) : (
            <p>글이 존재하지 않습니다.</p>
          )}
        </div>
      </article>
      <article className="list-article">
        <div>
          <h4>note - 제약없이 자유로운 기록</h4>
          <Link href="/blog/note">더보기</Link>
        </div>
        <div>
          {data?.note.length ? (
            <BlogContentList type="note" data={data?.note} />
          ) : (
            <p>글이 존재하지 않습니다.</p>
          )}
        </div>
      </article>
    </section>
  );
}

const getData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "blog/list", {
    cache: "no-store",
  });
  return await res.json();
};

export default Page;
