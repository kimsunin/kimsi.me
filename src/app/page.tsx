import {GithubLinkBox, BlogLinkBox, ThemeSwitchBox, SoundSwitchBox, GmailLinkBox} from "@/component/Box";
import CustomImage from "@/component/CustomImage/CustomImage";
import "./page.css"

export default function Home() {
    return (
        <div className={"home-page"}>
            <div className={"github-layout"}>
                <GithubLinkBox/>
            </div>
            <div className={"util-layout"}>
                <ThemeSwitchBox/>
                <SoundSwitchBox/>
            </div>
            <div className={"jobs-layout"}>
                <div>
                    <BlogLinkBox/>
                    <GmailLinkBox/>
                </div>
                <div>
                    <CustomImage src={"/gif/retriver-sleep.gif"}/>
                </div>
            </div>
        </div>
    );
};
