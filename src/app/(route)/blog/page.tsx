"use client";
import BlogListPage from "@/component/Blog/BlogListPage/BlogListPage";
import React from "react";

function Page() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={visible ? "is-visible" : "is-invisible"}>
      <article>
        <BlogListPage />
      </article>
    </section>
  );
}

export default Page;
