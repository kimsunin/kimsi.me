"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./Header.css";
import { blogCategoryModel, craftCategoryModel } from "@/model/index";
import { CategoryIc } from "svg/index";

type PropsType = {
  type?: string;
  title: string;
};

function Header({ type, title }: PropsType) {
  const pathName = usePathname();
  const [isClick, setIsClick] = React.useState(false);

  const blogCategoryList = blogCategoryModel.map((item, index) => (
    <li key={index}>
      <Link
        href={item.href}
        className={
          pathName.split("/")[2] == item.href.split("/")[2] ? "is-located" : ""
        }
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
        className={
          pathName.split("/")[2] == item.href.split("/")[2] ? "is-located" : ""
        }
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
        <h1>{title}</h1>
        {type && (
          <button
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            <CategoryIc />
          </button>
        )}
      </div>
      {type && (
        <ul className={isClick ? "category-on" : "category-off"}>
          {type == "blog" && blogCategoryList}
          {type == "craf" && craftCategoryList}
        </ul>
      )}
    </div>
  );
}

export default Header;
