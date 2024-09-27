import Link from "next/link";
import "./page.css"
import {NotFoundImgIc} from "../../public/svg";

function NotFound() {
    return <div className={"not-found-page"}>
        <div>
            <NotFoundImgIc/>
        </div>
        <h1>404: not found</h1>
        <div>
            <Link href={"/"}>cd ~</Link>
        </div>
    </div>;
}

export default NotFound;