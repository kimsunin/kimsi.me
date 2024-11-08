"use client";
import React from "react";
import {
  WidgetGithub,
  CustomImage,
  WidgetLink,
  WidgetMemo,
  WidgetTheme,
  WidgetSound,
  WidgetMap,
  WidgetGa,
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
              <WidgetGithub />
            </li>
            <li className={"surf-img img"}>
              <CustomImage src={"/img/surf.png"} />
            </li>
            <li className="craft rotate-r">
              <WidgetLink
                href="/craft"
                title="Craft"
                type="home"
                subtitle="/craft"
                iconBoxStyle="icon-box"
              ></WidgetLink>
            </li>
            <li className={"blog rotate-l"}>
              <WidgetLink
                type={"blog"}
                href={"/blog"}
                title={"Blog"}
                subtitle={"/blog"}
                iconBoxStyle="icon-box"
              />
            </li>
            <li className="memo">
              <WidgetMemo text="끊임없이 고민하고 사색하며 기록하고자 노력합니다." />
            </li>
            <li className={"anxiety-img img"}>
              <CustomImage src={"/gif/study.gif"} />
            </li>
            <li className={"theme rotate-r"}>
              <WidgetTheme />
            </li>
            <li className={"sound rotate-r"}>
              <WidgetSound />
            </li>
            <li className="map rotate-r">
              <WidgetMap />
            </li>
            <li className={"gmail rotate-l"}>
              <WidgetLink
                type={"gmail"}
                href={"mailto:suninkim10@gmail.com"}
                title={"Gmail"}
                subtitle={"suninkim10 @gmail.com"}
                iconBoxStyle="icon-box-full"
                bgColor="#19E6FF"
              />
            </li>
            <li className="instagram rotate-r">
              <WidgetLink
                type="instagram"
                href="https://www.instagram.com/seo__nin"
                title="Instagram"
                subtitle="@seo__nin"
                target="_blank"
                iconBoxStyle="icon-box-full"
                bgColor="#FF543E"
              />
            </li>
            <li className="ga">
              <WidgetGa data={gaData} />
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
