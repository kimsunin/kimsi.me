import GithubLinkBox from "@/components/GithubLinkBox/GithubLinkBox";
import "./page.css"
import ThemeSwitchBox from "@/components/ThemeSwitchBox/ThemeSwitchBox";

export default function Home() {
    return (
        <div className={"home-page"}>
            <div className={"github-layout"}>
                <GithubLinkBox/>
            </div>
            <div className={"util-layout"}>
                <ThemeSwitchBox/>
                <div className={"blog-layout w-full h-[160px] border rounded-lg"}>
                    sound-layout
                </div>
            </div>
            <div className={"jobs-layout"}>
                <div>
                    <div className={"h-[160px] mb-[20px] border rounded-lg"}>blog-layout</div>
                    <div></div>
                </div>
                <div className={"border rounded-lg"}>
                    photo-layout
                </div>
            </div>
        </div>
    );
};
