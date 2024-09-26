"use client"
import {useTheme} from "next-themes";
import "./ThemeSwitchBox.css"
import {MoonIc, SunIc} from "@/assets/svgs";

function ThemeSwitchBox(){
    const {setTheme, resolvedTheme} = useTheme();


    const switchTheme = () => {
        if (resolvedTheme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return <button className={"theme-switch-box"} onClick={switchTheme}>
        <div>
            <div className={"icon-box"}>
                {resolvedTheme == "light" ? <SunIc/> : <MoonIc/>}
            </div>
            <span>
                {resolvedTheme}
            </span>
        </div>
    </button>;
}

export default ThemeSwitchBox;