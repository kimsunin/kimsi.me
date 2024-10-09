"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BlogContentList } from "@/component";
import { BlogContentGroupListType, BlogType } from "@/type/BlogType";
import { useDialog } from "@/hook/useDialog";

function Page() {
  const { alert } = useDialog();
  const router = useRouter();

  const [data, setData] = React.useState<BlogContentGroupListType>();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    getData().then(async (res: BlogType) => {
      if (res.status == 200) {
        setData(res.data);
        setVisible(true);
      } else {
        await alert(res.message).then(() => {
          router.back();
        });
      }
    });
  }, []);

  return (
    <section className={visible ? "is-visible" : "is-invisible"}>
      <article className="list-article">
        <div>
          <h3>develop - 개발에 관한 기록</h3>
          <Link href="/blog/list/dev">더보기</Link>
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
          <h3>engineering - 공학에 관한 기록</h3>
          <Link href="/blog/list/engin">더보기</Link>
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
          <h3>note - 제약없이 자유로운 기록</h3>
          <Link href="/blog/list/note">더보기</Link>
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
