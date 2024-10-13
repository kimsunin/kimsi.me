"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BlogContentList, BlogContentListTitle } from "@/component";
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
      <article>
        <BlogContentListTitle
          title="「 develop 」 - 개발에 관한 기록"
          href="/blog/list/dev"
        />
        <div>
          {data?.dev.length ? (
            <BlogContentList type="dev" data={data?.dev} />
          ) : (
            <p>글이 존재하지 않습니다.</p>
          )}
        </div>
      </article>
      <article className="my-[80px]">
        <BlogContentListTitle
          title="「 engineering 」 - 공학에 관한 기록"
          href="/blog/list/engin"
        />
        <div>
          {data?.engin.length ? (
            <BlogContentList type="engin" data={data?.engin} />
          ) : (
            <p>글이 존재하지 않습니다.</p>
          )}
        </div>
      </article>
      <article>
        <BlogContentListTitle
          title="「 note 」 - 제약없이 자유로운 기록"
          href="/blog/list/note"
        />
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
