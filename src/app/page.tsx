"use client";
import React from "react";
import {
  GithubLinkBox,
  CustomImage,
  LinkBox,
  MemoBox,
  ThemeSwitchBox,
  SoundSwitchBox,
  MapBox,
  GaBox,
} from "@/component";
import { getAnalytics } from "@/util/google";
import { GaDataType } from "@/type/GaType";
import "./page.css";

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const [gaData, setGaData] = React.useState<GaDataType>({
    list: [],
    percent: 0,
    total: 0,
  });

  React.useEffect(() => {
    getGaData().then((res: GaDataType) => {
      setGaData(res);
    });
    setVisible(true);
  }, []);

  return (
    <main>
      <section className={visible ? "is-visible" : "is-invisible"}>
        <article>
          <ul className={"list-page-layout"}>
            <li className={"github rotate-r"}>
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
                subtitle={"/blog"}
              />
            </li>
            <li className="memo">
              <MemoBox text="끊임없이 고민하고 사색하며 기록하고자 노력합니다." />
            </li>
            <li className={"anxiety-img img"}>
              <CustomImage src={"/gif/study.gif"} />
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
            <li className="ga">
              <GaBox data={gaData} />
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

const getGaData = async () => {
  let res = await getAnalytics();
  return res;
};
