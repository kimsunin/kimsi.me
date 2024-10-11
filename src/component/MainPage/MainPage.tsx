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
      <li className="memo">
        <MemoBox />
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
      <h4>CRAFTS 🛠️</h4>
      <li className={"craft-item"}>
        <LinkBox
          type={"nonghaeng"}
          href={"https://nonghaeng.site"}
          title={"농행동행"}
          subtitle={"농촌관광 서비스 농행동행"}
          target={"_blank"}
        />
      </li>
      <li className="craft-item">
        <LinkBox
          type="blog_v1"
          href="https://blog.kimsi.me"
          title="Blog_v1"
          subtitle="김선인의 첫번째 기술 블로그"
          target={"_blank"}
        />
      </li>
      <li className={"craft-item"}>
        <LinkBox
          type={"bookShare"}
          href={"https://book.kimsi.me"}
          title={"BOOK-SHARE"}
          subtitle={"도서대출 웹 서비스"}
          target={"_blank"}
        />
      </li>
      <li className={"craft-item"}>
        <LinkBox
          type={"bmw"}
          href={"https://bmw.kimsi.me"}
          title={"BMW"}
          subtitle={"canvas태그를 이용한 자동차 게임"}
          target={"_blank"}
        />
      </li>
      <h4>STACKS 💻</h4>
    </ul>
  );
}

export default MainPage;
