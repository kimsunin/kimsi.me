"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./BlogHeader.css";
import { blogCategoryModel } from "@/model/blogCategoryModel";
import { CategoryIc } from "svg/index";

function BlogHeader() {
  const pathName = usePathname();
  const [isClick, setIsClick] = useState(false);

  const categoryList = blogCategoryModel.map((item, index) => (
    <li key={index}>
      <Link
        href={item.href}
        className={pathName == item.href ? "is-located" : ""}
      >
        {item.title}
        {" - "}
        {item.subTitle}
      </Link>
    </li>
  ));

  return (
    <div className={"blog-header"}>
      <div>
        <Link href={"/blog/list"}>BLOG</Link>
        <button
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          <CategoryIc />
        </button>
      </div>
      <ul className={isClick ? "category-on" : "category-off"}>
        {categoryList}
      </ul>
      <hr />
    </div>
  );
}

export default BlogHeader;
