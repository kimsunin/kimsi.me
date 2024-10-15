"use client";
import React from "react";
import { LinkBox, MemoBox } from "@/component";
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
            <MemoBox text="손으로 직접 만들고 보여주는 공간" />
          </li>
          <li className="nonghaeng rotate-r">
            <LinkBox
              title="농행동행"
              subtitle="농촌관광 플랫폼"
              type="nonghaeng"
              href="https://nonghaeng.site"
              target="_blank"
            />
          </li>
          <li className="blog rotate-r">
            <LinkBox
              title="blog-v1"
              subtitle="첫번째 기술 블로그"
              type="blog_v1"
              href="https://blog.kimsi.me"
              target="_blank"
            />
          </li>
          <li className="book rotate-l">
            <LinkBox
              title="book-share"
              subtitle="도서대출 웹 서비스"
              type="book"
              href="https://book.kimsi.me"
              target="_blank"
            />
          </li>
          <li className="bmw rotate-l">
            <LinkBox
              title="bmw"
              subtitle="canvas 자동차 게임"
              type="bmw"
              href="https://bmw.kimsi.me"
              target="_blank"
            />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Page;
