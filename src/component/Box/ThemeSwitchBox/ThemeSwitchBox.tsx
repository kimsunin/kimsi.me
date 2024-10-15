"use client";
import { useTheme } from "next-themes";
import { MoonIc, SunIc } from "svg/index";

function ThemeSwitchBox() {
  const { setTheme, resolvedTheme } = useTheme();

  const switchTheme = () => {
    if (resolvedTheme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button className={"box"} onClick={switchTheme}>
      <div>
        <div className={"icon-box"}>
          {resolvedTheme == "light" ? <SunIc /> : <MoonIc />}
        </div>
        <div className={"text-box"}>
          <p>{resolvedTheme == "light" ? "Light" : "Dark"}</p>
          <p>switch theme</p>
        </div>
      </div>
    </button>
  );
}

export default ThemeSwitchBox;
