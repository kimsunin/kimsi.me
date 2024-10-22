"use client";
import React from "react";
import { useDialog } from "@/hook/useDialog";
import { useRouter } from "next/navigation";
import {
  BlogComment,
  BlogContentList,
  BlogContentTitle,
  MarkDownView,
  MemoBox,
} from "@/component";
import {
  BlogContenDetailType,
  BlogContentListType,
  BlogType,
} from "@/type/BlogType";
import Link from "next/link";

function Page({ params }: { params: { slug: string[] } }) {
  const { alert } = useDialog();
  const router = useRouter();

  const [listData, setListData] = React.useState<BlogContentListType>();
  const [detailData, setDetailData] = React.useState<BlogContenDetailType>();
  const [visible, setVisible] = React.useState(false);
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    if (params.slug[0] == "dev") {
      setTitle("「 develop 」 - 개발에 관한 기록");
    }
    if (params.slug[0] == "engin") {
      setTitle("「 engineering 」 - 공학에 관한 기록");
    }
    if (params.slug[0] == "note") {
      setTitle("「 note 」 - 제약없이 자유로운 기록");
    }
    if (!params.slug[1]) {
      getListData(params.slug[0]).then(async (res: BlogType) => {
        if (res.status == 200) {
          setListData(res.data);
          setVisible(true);
        } else {
          await alert(res.message).then(() => {
            router.back();
          });
        }
      });
    } else {
      getDetailData(params.slug[0], params.slug[1]).then(
        async (res: BlogType) => {
          if (res.status == 200) {
            setDetailData(res.data);
            setVisible(true);
          } else {
            await alert(res.message).then(() => {
              router.back();
            });
          }
        }
      );
    }
  }, []);

  if (!params.slug[1]) {
    return (
      <section className={visible ? "is-visible" : "is-invisible"}>
        <article>
          <div className="memo mb-[40px]">
            <MemoBox text={title} />
          </div>
          <div>
            {listData ? (
              <BlogContentList type={params.slug[0]} data={listData} />
            ) : (
              <p>글이 존재하지 않습니다.</p>
            )}
          </div>
        </article>
      </section>
    );
  } else {
    return (
      <section className={visible ? "is-visible" : "is-invisible"}>
        <article>
          <BlogContentTitle title={detailData?.title} date={detailData?.date} />
          <MarkDownView post={detailData?.content} />
          <BlogComment />
          <Link href={`/edit/${params.slug[0]}/${params.slug[1]}`}>edit</Link>
        </article>
      </section>
    );
  }
}

const getListData = async (id: string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "blog/list/" + id);
  return await res.json();
};

const getDetailData = async (type: string, id: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `blog/detail/${type}/${id}`,
    { cache: "no-store" }
  );
  return await res.json();
};

export default Page;
