"use client"
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";
import "../styles/BlogHeader.css"
import { blogCategoryModel } from "@/model/blogCategoryModel";
import {CategoryIc} from "svg/index";


function BlogHeader() {
    const pathName = usePathname().split("/").slice(2,3).join("/");
    const [isClick, setIsClick] = useState(false);

    const categoryList = blogCategoryModel.map((item, index) =>
        <li key={index}>
            <Link href={item.href}>
                <span>{item.title}</span>
                {" - "}
                <span>{item.subTitle}</span>
            </Link>
        </li>
    );

    return (
        <div className={"blog-header"}>
            <div>
                <div><Link href={"/blog"}>BLOG</Link>{pathName && <span>{pathName}</span>}</div>
                <button onClick={() => {
                    setIsClick(!isClick);
                }}><CategoryIc/>
                </button>
            </div>
            <ul className={isClick ? "category-on" : "category-off"}>
                {categoryList}
            </ul>
            <hr/>
        </div>
    );
}


export default BlogHeader;