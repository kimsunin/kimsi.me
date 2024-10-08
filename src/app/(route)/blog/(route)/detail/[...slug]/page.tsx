"use client";
import BlogContentTitle from "@/component/BlogContentTitle/BlogContentTitle";
import MarkDownView from "@/component/MarkDownView/MarkDownView";
import { BlogContenDetailType, BlogType } from "@/type/BlogType";
import React from "react";

function Page({ params }: { params: { slug: string[] } }) {
  const [data, setData] = React.useState<BlogContenDetailType>();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    getData(params.slug[0], params.slug[1]).then((res: BlogType) => {
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
