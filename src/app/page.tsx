"use client";
import React from "react";
import { MainPage } from "@/component";

export default function Home() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main>
      <section className={visible ? "is-visible" : "is-invisible"}>
        <article>
          <MainPage />
        </article>
      </section>
    </main>
  );
}
