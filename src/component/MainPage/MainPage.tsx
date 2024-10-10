import {
  LinkBox,
  GithubLinkBox,
  ThemeSwitchBox,
  SoundSwitchBox,
  CustomImage,
  MemoBox,
} from "@/component";
import "./MainPage.css";

function MainPage() {
  return (
    <ul className={"main-page"}>
      <li className={"github"}>
        <GithubLinkBox />
      </li>
      <li className={"theme"}>
        <ThemeSwitchBox />
      </li>
      <li className={"blog"}>
        <LinkBox
          type={"blog"}
          href={"/blog/list"}
          title={"BLOG"}
          subtitle={"link to blog"}
        />
      </li>
      <li className={"sound"}>
        <SoundSwitchBox />
      </li>
      <li className={"img"}>
        <CustomImage src={"/gif/insideout-anxiety.gif"} />
      </li>
      <li className={"gmail"}>
        <LinkBox
          type={"gmail"}
          href={"mailto:suninkim10@gmail.com"}
          title={"GMAIL"}
          subtitle={"suninkim10 @gmail.com"}
        />
      </li>
      <li className="memo">
        <MemoBox />
      </li>
      <h4>CRAFTS 🛠️</h4>
      <li className={"craft-item"}>
        <LinkBox
          type={"nonghaeng"}
          href={"https://nonghaeng.site"}
          title={"농행동행"}
          subtitle={"link to nonghaeng"}
          target={"_blank"}
        />
      </li>
      <li className={"craft-item"}>
        <LinkBox
          type={"bookShare"}
          href={"https://book.kimsi.me"}
          title={"BOOK-SHARE"}
          subtitle={"link to book-share"}
          target={"_blank"}
        />
      </li>
      <li className={"craft-item"}>
        <LinkBox
          type={"bmw"}
          href={"/craft/bmw"}
          title={"BMW"}
          subtitle={"link to bmw"}
        />
      </li>
      <h4>STACKS 💻</h4>
    </ul>
  );
}

export default MainPage;
