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
    <ul className={"list-page-layout"}>
      <li
        className={
          "github pc:hover:rotate-1 pc-large:hover:rotate-1 duration-200 transition-rotate"
        }
      >
        <GithubLinkBox />
      </li>
      <li className={"surf-img img"}>
        <CustomImage src={"/img/surf.png"} />
      </li>
      <li className="craft rotate-r">
        <LinkBox
          href="/craft"
          title="Craft"
          type="home"
          subtitle="/craft"
        ></LinkBox>
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
      <li className={"anxiety-img img"}>
        <CustomImage src={"/gif/insideout-anxiety.gif"} />
      </li>
      <li className={"theme rotate-r"}>
        <ThemeSwitchBox />
      </li>
      <li className={"sound rotate-r"}>
        <SoundSwitchBox />
      </li>
      <li className="map rotate-r">
        <MapBox />
      </li>
      <li className={"gmail rotate-l"}>
        <LinkBox
          type={"gmail"}
          href={"mailto:suninkim10@gmail.com"}
          title={"Gmail"}
          subtitle={"suninkim10 @gmail.com"}
        />
      </li>
      <li className="edit rotate-l">
        <LinkBox
          type="edit"
          href="/edit"
          title="Edit"
          subtitle="김선인의 작업공간"
        />
      </li>
    </ul>
  );
}

export default MainPage;
