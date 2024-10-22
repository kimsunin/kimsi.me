"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MarkDownEditor } from "@/component/index";
import { useChange } from "@/hook/useChange";
import { useDialog } from "@/hook/useDialog";
import "../page.css";

function Page({ params }: { params: { slug: string[] } }) {
  const router = useRouter();
  const change = useChange();
  const { alert, prompt } = useDialog();

  const [visible, setVisible] = useState(false);

  const [editItem, setEditItem] = useState<{
    title: string;
    subTitle: string;
    content: string | undefined;
  }>({
    title: "",
    subTitle: "",
    content: "",
  });

  const itemChange = (e: any) => {
    change({ changeItem: editItem, setChangeItem: setEditItem, e });
  };
  const contentChange = useCallback(
    (value: string | undefined) => {
      setEditItem({ ...editItem, content: value });
    },
    [editItem]
  );

  const deleteItem = async () => {
    let ok = false;
    while (!ok) {
      await prompt("비밀번호").then(async (res) => {
        if (res !== undefined) {
          if (res == process.env.NEXT_PUBLIC_PASSWORD) {
            const res = await fetch(
              process.env.NEXT_PUBLIC_API_URL +
                `edit/${params.slug[0]}/${params.slug[1]}`,
              { method: "delete" }
            );
            const data = await res.json();
            if (data.staus == 200) {
              await alert(data.message).then(() => {
                router.replace(`/${params.slug[0]}`);
              });
            } else {
              await alert(data.message);
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

  const updateItem = async () => {
    let ok = false;
    while (!ok) {
      await prompt("비밀번호").then(async (res) => {
        if (res !== undefined) {
          if (res == process.env.NEXT_PUBLIC_PASSWORD) {
            const res = await fetch(
              process.env.NEXT_PUBLIC_API_URL +
                `edit/${params.slug[0]}/${params.slug[1]}`,
              { method: "post", body: JSON.stringify(editItem) }
            );
            const data = await res.json();
            if (data.staus == 200) {
              await alert(data.message).then(() => {
                router.replace(`/${params.slug[0]}`);
              });
            } else {
              await alert(data.message);
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

  useEffect(() => {
    getData(params.slug[0], params.slug[1]).then((res) => {
      if (res?.status == 200) {
        setVisible(true);
        setEditItem({
          title: res.data.title,
          subTitle: res.data.sub_title,
          content: res.data.content,
        });
      } else {
        alert(res.message).then(() => router.back());
      }
    });
  }, []);

  return (
    <section className={visible ? "isvisible" : "isinvisible"}>
      <article className="edit-page">
        <div onChange={itemChange}>
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
          <div>
            <button onClick={deleteItem}>삭제</button>
            {" / "}
            <button onClick={updateItem}>수정</button>
          </div>
        </div>
      </article>
    </section>
  );
}

const getData = async (type: string, id: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `blog/edit/${type}/${id}`,
    { method: "get", cache: "no-store" }
  );
  return await res.json();
};

export default Page;
