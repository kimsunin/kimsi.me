import Link from "next/link";
import {BlogIc} from "svg/index";

function BlogLinkBox() {
    return <Link href={"https://blog.kimsi.me"} target={"_blank"} className={"box"}>
        <div>
            <div className={"icon-box"}>
                <BlogIc/>
            </div>
            <div className={"text-box"}>
                <p>Blog</p>
                <p>
                    move to blog
                </p>
            </div>
        </div>
    </Link>;
}

export default BlogLinkBox;