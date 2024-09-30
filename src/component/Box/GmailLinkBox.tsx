import Link from "next/link";
import {MailIc} from "svg/index";

function GmailLinkBox() {
    return <Link href={"mailto:suninkim10@gmail.com"} className={"box"}>
        <div>
        <div className={"icon-box"}>
            <MailIc/>
        </div>
            <div className={"text-box"}>
                <p>Gmail</p>
                <p>
                   link to gmail
                </p>
            </div>
        </div>
    </Link>
}

export default GmailLinkBox;