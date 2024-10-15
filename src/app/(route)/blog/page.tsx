"use client";
import React from "react";
import { MemoBox, LinkBox } from "@/component";
import "./page.css";

function Page() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={visible ? "is-visible" : "is-invisible"}>
      <article>
        <ul className="list-page-layout">
          <li className="memo">
            <MemoBox text="김선인의 두번째 블로그 입니다" />
          </li>
          <li className="dev rotate-r">
            <LinkBox
              type="dev"
              href="/blog/dev"
              title="develop"
              subtitle="개발에 관한 기록"
            />
          </li>
          <li className="engin rotate-l">
            <LinkBox
              type="craft"
              href="/blog/engin"
              title="engineering"
              subtitle="공학에 관한 기록"
            />
          </li>
          <li className="note rotate-r">
            <LinkBox
              type="note"
              href="/blog/note"
              title="note"
              subtitle="제약없이 자유로운 기록"
            />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Page;
