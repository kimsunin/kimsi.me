"use client";
import React from "react";

function Page({ params }: { params: { id: string } }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={visible ? "is-visible" : "is-invisible"}>
      <article>
        <iframe
          src={`https://${params.id}.kimsi.me`}
          width={"100%"}
          height={500}
        />
      </article>
    </section>
  );
}

export default Page;
