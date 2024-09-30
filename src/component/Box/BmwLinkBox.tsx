import Link from "next/link";
import {BmwIc} from "svg/index";

function BmwLinkBox() {
    return <Link href={"/craft/bmw"} className={"box"}>
        <div>
            <div className={"icon-box"}>
                <BmwIc/>
            </div>
            <div className={"text-box"}>
                <p>BMW</p>
                <p>canvas 자동차게임</p>
            </div>
        </div>
    </Link>;
}

export default BmwLinkBox;