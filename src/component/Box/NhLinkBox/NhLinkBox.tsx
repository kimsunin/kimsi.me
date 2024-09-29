import Link from "next/link";
import {NongHaengIc} from "svg/index";

function NhLinkBox(){
    return <Link href={"https://nonghaeng.site"} target={"_blank"} className={"box"}>
        <div>
            <div className={"icon-box"}>
                <NongHaengIc/>
            </div>
            <div className={"text-box"}>
                <p>농행동행</p>
                <p>농촌관광 플랫폼 농행동행</p>
            </div>
        </div>
    </Link>;
}

export default NhLinkBox;