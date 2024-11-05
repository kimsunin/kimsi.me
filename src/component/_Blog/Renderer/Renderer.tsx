"use client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

type PropsType = {
  post: any;
};

function Renderer({ post }: PropsType) {
  return <NotionRenderer recordMap={post} />;
}

export default Renderer;
