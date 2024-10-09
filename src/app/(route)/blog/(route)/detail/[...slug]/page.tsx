"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BlogContentTitle, MarkDownView } from "@/component";
import { useDialog } from "@/hook/useDialog";
import { BlogContenDetailType, BlogType } from "@/type/BlogType";

function Page({ params }: { params: { slug: string[] } }) {
  const { alert } = useDialog();
  const router = useRouter();

  const [data, setData] = React.useState<BlogContenDetailType>();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    getData(params.slug[0], params.slug[1]).then(async (res: BlogType) => {
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
        <BlogContentTitle title={data?.title} date={data?.date} />
        <MarkDownView post={data?.content} />
      </article>
    </section>
  );
}

const getData = async (type: string, id: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `blog/detail/${type}/${id}`,
    { cache: "no-store" }
  );
  return await res.json();
};

export default Page;
