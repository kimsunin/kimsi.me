"use client"
import React from "react";
import {
    GithubLinkBox,
    BlogLinkBox,
    ThemeSwitchBox,
    SoundSwitchBox,
    GmailLinkBox,
    NhLinkBox,
    BookShareLinkBox,
    CustomImage, BmwLinkBox
} from "@/component";
import "./page.css"


export default function Home() {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        setVisible(true)
    }, []);


    return (
        <main>
            <section className={visible ? "is-visible" : "is-invisible"}>
                <article className={"github-layout"}>
                    <GithubLinkBox/>
                </article>
                <article className={"util-layout"}>
                    <ThemeSwitchBox/>
                    <SoundSwitchBox/>
                </article>
                <article className={"jobs-layout"}>
                    <div>
                        <BlogLinkBox/>
                        <GmailLinkBox/>
                    </div>
                    <div>
                        <CustomImage src={"/gif/retriver-sleep.gif"}/>
                    </div>
                </article>
                <article className={"craft-layout"}>
                    <h4>
                        CRAFTS 🛠️
                    </h4>
                    <div>
                        <NhLinkBox/>
                        <BookShareLinkBox/>
                        <BmwLinkBox/>
                    </div>
                </article>
                <article className={"stack-layout"}>
                    <h4>
                        STACKS 💻
                    </h4>
                    <div>
                    </div>
                </article>
            </section>
        </main>
    );
};
