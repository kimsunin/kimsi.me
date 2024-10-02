"use client";
import React from "react";
import {
  LinkBox,
  GithubLinkBox,
  ThemeSwitchBox,
  SoundSwitchBox,
  CustomImage,
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
              <GithubLinkBox/>
            </li>
            <li className={"theme"}>
              <ThemeSwitchBox/>
            </li>
            <li className={"blog"}>
              <LinkBox type={"blog"} href={"https://blog.kimsi.me"} target={"_blank"} title={"BLOG"}
                       subtitle={"link to blog"}/>
            </li>
            <li className={"sound"}>
              <SoundSwitchBox/>
            </li>
            <li className={"img"}>
              <CustomImage src={"/gif/insideout-anxiety.gif"}/>
            </li>
            <li className={"gmail"}>
              <LinkBox type={"gmail"} href={"mailto:suninkim10@gmail.com"} title={"GMAIL"}
                       subtitle={"suninkim10 @gmail.com"}/>
            </li>
            <h4>CRAFTS 🛠️</h4>
            <li className={"craft-item"}>
              <LinkBox type={"nonghaeng"} href={"https://nonghaeng.site"} title={"농행동행"}
                       subtitle={"link to nonghaeng"} target={"_blank"}/>
            </li>
            <li className={"craft-item"}>
              <LinkBox type={"bookShare"} href={"https://book.kimsi.me"} title={"BOOK-SHARE"}
                       subtitle={"link to book-share"} target={"_blank"}/>
            </li>
            <li className={"craft-item"}>
              <LinkBox type={"bmw"} href={"/craft/bmw"} title={"BMW"} subtitle={"link to bmw"}/>
            </li>
            <h4>STACKS 💻</h4>
          </ul>
        </section>
      </main>
  );
}
