"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { NotionComponents } from "react-notion-x";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    await Promise.allSettled([
      // @ts-ignore
      import("prismjs/components/prism-markup.js"),
      // @ts-ignore
      import("prismjs/components/prism-bash.js"),
      // @ts-ignore
      import("prismjs/components/prism-diff.js"),
      // @ts-ignore
      import("prismjs/components/prism-git.js"),
      // @ts-ignore
      import("prismjs/components/prism-markup"),
      // @ts-ignore
      import("prismjs/components/prism-markdown.js"),
      // @ts-ignore
      import("prismjs/components/prism-python.js"),
      // @ts-ignore
      import("prismjs/components/prism-sql.js"),
      // @ts-ignore
      import("prismjs/components/prism-yaml.js"),
      // @ts-ignore
      import("prismjs/components/prism-typescript.js"),
      // @ts-ignore
      import("prismjs/components/prism-css.js"),
      // @ts-ignore
      import("prismjs/components/prism-javascript.js"),
      // @ts-ignore
      import("prismjs/components/prism-json.js"),
      // @ts-ignore
      import("prismjs/components/prism-jsx.js"),
      // @ts-ignore
      import("prismjs/components/prism-tsx.js"),
    ]);
    return m.Code;
  })
);

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

type PropsType = {
  post: any;
};

function Renderer({ post }: PropsType) {
  const components: Partial<NotionComponents> = useMemo(
    () => ({ Code, nextImage: Image, nextLink: Link, Collection }),
    []
  );

  return <NotionRenderer recordMap={post} components={components} />;
}

export default Renderer;
