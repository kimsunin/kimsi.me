"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MarkDownEditor } from "@/component/index";
import { useChange } from "@/hook/useChange";
import { useDialog } from "@/hook/useDialog";
import "../page.css";
import { BlogEditType, BlogType } from "@/type/BlogType";
import { ResType } from "@/type/ResType";

function Page({ params }: { params: { slug: string[] } }) {
  const router = useRouter();
  const change = useChange();
  const { alert, prompt } = useDialog();

  const [visible, setVisible] = useState(false);

  const [editItem, setEditItem] = useState<BlogEditType>({
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

  const onSubmitUpdate = async () => {
    let ok = false;
    while (!ok) {
      await prompt("비밀번호").then(async (res) => {
        if (res !== undefined) {
          if (res == process.env.NEXT_PUBLIC_PASSWORD) {
            await updateBlog(params.slug[0], params.slug[1], editItem).then(
              async (res: ResType<any>) => {
                if (res.status == 200) {
                  await alert(res.message).then(() => {
                    router.replace(`/blog/${params.slug[0]}/${params.slug[1]}`);
                  });
                } else {
                  await alert(res.message);
                }
                ok = true;
              }
            );
          } else {
            await alert("비밀번호 오류");
          }
        } else {
          ok = true;
        }
      });
    }
  };

  const onSubmitDelete = async () => {
    let ok = false;
    while (!ok) {
      await prompt("비밀번호").then(async (res) => {
        if (res !== undefined) {
          if (res == process.env.NEXT_PUBLIC_PASSWORD) {
            await deleteBlog(params.slug[0], params.slug[1]).then(
              async (res: ResType<any>) => {
                if (res.status == 200) {
                  await alert(res.message).then(() => {
                    router.replace(`/blog/${params.slug[0]}`);
                  });
                } else {
                  await alert(res.message);
                }
                ok = true;
              }
            );
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
    getData(params.slug[0], params.slug[1]).then((res: ResType<BlogType>) => {
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
            <button onClick={onSubmitDelete}>삭제</button>
            {" / "}
            <button onClick={onSubmitUpdate}>수정</button>
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

const updateBlog = async (type: string, id: string, editItem: BlogEditType) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `blog/edit/${type}/${id}`,
    { method: "post", body: JSON.stringify(editItem) }
  );
  return await res.json();
};

const deleteBlog = async (type: string, id: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `blog/edit/${type}/${id}`,
    { method: "delete" }
  );
  return await res.json();
};

export default Page;
