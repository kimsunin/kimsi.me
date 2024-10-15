"use client";
import React from "react";
import { BlogListPage } from "@/component";

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
