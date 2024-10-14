import {
  LinkBox,
  GithubLinkBox,
  ThemeSwitchBox,
  SoundSwitchBox,
  CustomImage,
  MemoBox,
  MapBox,
} from "@/component";
import "./MainPage.css";

function MainPage() {
  return (
    <ul className={"main-page"}>
      <li className={"github hover:rotate-1 duration-200"}>
        <GithubLinkBox />
      </li>
      <li className={"theme rotate-r"}>
        <ThemeSwitchBox />
      </li>
      <li className={"blog rotate-l"}>
        <LinkBox
          type={"blog"}
          href={"/blog"}
          title={"Blog"}
          subtitle={"link to blog"}
        />
      </li>
      <li className="memo">
        <MemoBox text="끊임없이 고민하고 사색하며 기록하고자 노력합니다." />
      </li>
      <li className={"img"}>
        <CustomImage src={"/gif/insideout-anxiety.gif"} />
      </li>
      <li className={"sound rotate-r"}>
        <SoundSwitchBox />
      </li>
      <li className={"gmail rotate-l"}>
        <LinkBox
          type={"gmail"}
          href={"mailto:suninkim10@gmail.com"}
          title={"Gmail"}
          subtitle={"suninkim10 @gmail.com"}
        />
      </li>
      <li className="map rotate-r">
        <MapBox />
      </li>
      <h4>CRAFTS 🛠️</h4>
      <li className={"craft-item rotate-l"}>
        <LinkBox
          type={"nonghaeng"}
          href={"https://nonghaeng.site"}
          title={"농행동행"}
          subtitle={"농촌관광 서비스 농행동행"}
          target={"_blank"}
        />
      </li>
      <li className="craft-item rotate-l">
        <LinkBox
          type="blog_v1"
          href="https://blog.kimsi.me"
          title="Blog_v1"
          subtitle="김선인의 첫번째 기술 블로그"
          target={"_blank"}
        />
      </li>
      <li className={"craft-item rotate-r"}>
        <LinkBox
          type={"bookShare"}
          href={"https://book.kimsi.me"}
          title={"Book-Share"}
          subtitle={"도서대출 웹 서비스"}
          target={"_blank"}
        />
      </li>
      <li className={"craft-item rotate-l"}>
        <LinkBox
          type={"bmw"}
          href={"https://bmw.kimsi.me"}
          title={"Bmw"}
          subtitle={"canvas태그를 이용한 자동차 게임"}
          target={"_blank"}
        />
      </li>
      <h4>STACKS 💻</h4>
    </ul>
  );
}

export default MainPage;
