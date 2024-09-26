import Link from "next/link";
import "./page.css"
import {NotFounImgIc} from "@/assets/svgs";

function NotFound() {
    return <div className={"not-found-page"}>
        <div>
            <NotFounImgIc/>
        </div>
        <h1>404: not found</h1>
        <div>
            <Link href={"/"}>cd ~</Link>
        </div>
    </div>;
}

export default NotFound;