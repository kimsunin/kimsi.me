"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./Header.css";
import { blogCategoryModel, craftCategoryModel } from "@/model/index";
import { CategoryIc } from "svg/index";

type ProptType = {
  href: string;
  title: string;
};

function Header({ href, title }: ProptType) {
  const pathName = usePathname();
  const [isClick, setIsClick] = useState(false);

  const blogCategoryList = blogCategoryModel.map((item, index) => (
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

  const craftCategoryList = craftCategoryModel.map((item, index) => (
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
    <div className={"header"}>
      <div>
        <Link href={href}>{title}</Link>
        <button
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          <CategoryIc />
        </button>
      </div>
      <ul className={isClick ? "category-on" : "category-off"}>
        {pathName.startsWith("/blog") && blogCategoryList}
        {pathName.startsWith("/craft") && craftCategoryList}
      </ul>
    </div>
  );
}

export default Header;
