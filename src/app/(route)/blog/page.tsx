"use client";
import React from "react";
import { WidgetMemo, WidgetLink } from "@/component";
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
            <WidgetMemo text="김선인의 두번째 블로그 입니다" />
          </li>
          <li className="dev rotate-r">
            <WidgetLink
              type="dev"
              href="/blog/dev"
              title="develop"
              subtitle="개발에 관한 기록"
              iconBoxStyle="icon-box"
            />
          </li>
          <li className="engin rotate-l">
            <WidgetLink
              type="craft"
              href="/blog/engin"
              title="engineering"
              subtitle="공학에 관한 기록"
              iconBoxStyle="icon-box"
            />
          </li>
          <li className="note rotate-r">
            <WidgetLink
              type="note"
              href="/blog/note"
              title="note"
              subtitle="제약없이 자유로운 기록"
              iconBoxStyle="icon-box"
            />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Page;
