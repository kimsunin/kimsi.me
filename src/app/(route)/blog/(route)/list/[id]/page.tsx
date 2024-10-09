"use client";
import React from "react";
import { useDialog } from "@/hook/useDialog";
import { useRouter } from "next/navigation";
import { BlogContentList } from "@/component";
import { BlogContentListType, BlogType } from "@/type/BlogType";

function Page({ params }: { params: { id: string } }) {
  const { alert } = useDialog();
  const router = useRouter();

  const [data, setData] = React.useState<BlogContentListType>();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    getData(params.id).then(async (res: BlogType) => {
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
        <h3>
          {params.id == "dev" && "develop - 개발에 관한 기록"}
          {params.id == "engin" && "engineering - 공학에 관한 기록"}
          {params.id == "note" && "note - 제약없이 자유로운 기록"}
        </h3>
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
