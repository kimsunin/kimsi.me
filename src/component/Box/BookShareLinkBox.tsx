import Link from "next/link";
import {BookIc} from "svg/index";

function BookShareLinkBox() {
    return <Link href={"https://book.kimsi.me"} target={"_blank"} className={"box"}>
        <div>
            <div className={"icon-box"}>
                <BookIc/>
            </div>
            <div className={"text-box"}>
                <p>Book-Share</p>
                <p>
                    도서대출 서비스
                </p>
            </div>
        </div>
    </Link>;
}

export default BookShareLinkBox;
