"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDialog } from "@/hook/useDialog";
import { MarkDownEditor } from "@/component";
import { useChange } from "@/hook/useChange";
import "./page.css";

function Page() {
  const router = useRouter();
  const change = useChange();
  const { alert, prompt } = useDialog();

  const [visible, setVisible] = React.useState(false);
  const [editItem, setEditItem] = React.useState<{
    type: string;
    title: string;
    subTitle: string;
    content: string | undefined;
  }>({
    type: localStorage.getItem("type") || "note",
    title: localStorage.getItem("title") || "",
    subTitle: localStorage.getItem("subTitle") || "",
    content: localStorage.getItem("content") || "",
  });

  const itemChange = (e: any) => {
    change({ changeItem: editItem, setChangeItem: setEditItem, e });
  };

  const contentChange = React.useCallback(
    (value: string | undefined) => {
      setEditItem({ ...editItem, content: value });
    },
    [editItem]
  );

  const onSubmit = async () => {
    let ok = false;
    while (!ok) {
      await prompt("비밀번호").then(async (res) => {
        if (res !== undefined) {
          if (res == process.env.NEXT_PUBLIC_PASSWORD) {
            const res = await fetch(
              process.env.NEXT_PUBLIC_API_URL + "blog/edit",
              {
                method: "post",
                body: JSON.stringify(editItem),
                cache: "no-store",
              }
            );
            const data = await res.json();
            if (data.status == 200) {
              alert(data.message).then(() => {
                localStorage.removeItem("type");
                localStorage.removeItem("title");
                localStorage.removeItem("content");
                router.push(`blog/detail/${editItem.type}/${data.data[0].id}`);
              });
            } else {
              alert(data.message);
            }
            ok = true;
          } else {
            await alert("비밀번호 오류");
          }
        } else {
          ok = true;
        }
      });
    }
  };

  React.useEffect(() => {
    localStorage.setItem("type", editItem.type);
    if (editItem.title || editItem.title == "") {
      localStorage.setItem("title", editItem.title);
    }
    if (editItem.subTitle || editItem.subTitle == "") {
      localStorage.setItem("subTitle", editItem.subTitle);
    }
    if (editItem.content || editItem.content == "") {
      localStorage.setItem("content", editItem.content);
    }
    setVisible(true);
  }, [editItem]);

  return (
    <section className={visible ? "is-visible" : "is-invisible"}>
      <article className="edit-page">
        <div onChange={itemChange}>
          <select name="type">
            <option value="dev">dev</option>
            <option value="engin">engin</option>
            <option value="note">note</option>
          </select>
          <input
            defaultValue={editItem.title}
            name="title"
            placeholder="제목"
          />
          <input
            defaultValue={editItem.subTitle}
            name="subTitle"
            placeholder="부제목"
          />
        </div>
        <MarkDownEditor value={editItem.content} onChange={contentChange} />
        <div>
          <button onClick={() => router.back()}>취소</button>
          <button onClick={onSubmit}>생성</button>
        </div>
      </article>
    </section>
  );
}

export default Page;
