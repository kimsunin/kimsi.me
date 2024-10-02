"use client";
import React from "react";
import {
  GithubLinkBox,
  BlogLinkBox,
  ThemeSwitchBox,
  SoundSwitchBox,
  GmailLinkBox,
  NhLinkBox,
  BookShareLinkBox,
  CustomImage,
  BmwLinkBox,
} from "@/component";
import "./page.css";

export default function Home() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main>
      <section className={visible ? "is-visible" : "is-invisible"}>
        <ul className={"home-page"}>
          <li className={"github"}>
            <GithubLinkBox />
          </li>
          <li className={"theme"}>
            <ThemeSwitchBox />
          </li>
          <li className={"blog"}>
            <BlogLinkBox />
          </li>
          <li className={"sound"}>
            <SoundSwitchBox />
          </li>
          <li className={"retriver-img"}>
            <CustomImage src={"/gif/retriver-sleep.gif"} />
          </li>
          <li className={"gmail"}>
            <GmailLinkBox />
          </li>
          <h4>CRAFTS 🛠️</h4>
          <li className={"craft-item"}>
            <NhLinkBox />
          </li>
          <li className={"craft-item"}>
            <BookShareLinkBox />
          </li>
          <li className={"craft-item"}>
            <BmwLinkBox />
          </li>
          <h4>STACKS 💻</h4>
        </ul>
      </section>
    </main>
  );
}
