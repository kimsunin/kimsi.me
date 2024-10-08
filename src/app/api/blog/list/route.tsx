import { BlogContentGroupListType } from "@/type/BlogType";
import { supabase } from "@/util/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const datas: BlogContentGroupListType = { dev: [], engin: [], note: [] };

  const getDevData = async () => {
    const { data } = await supabase
      .from("dev")
      .select("id,title,date,img_url")
      .range(0, 3)
      .order("date", { ascending: false });
    if (data) {
      datas.dev = data;
    }
  };

  const getEnginData = async () => {
    const { data } = await supabase
      .from("engin")
      .select("id,title,date,img_url")
      .range(0, 3)
      .order("date", { ascending: false });
    if (data) {
      datas.engin = data;
    }
  };

  const getNoteData = async () => {
    const { data } = await supabase
      .from("note")
      .select("id,title,date,img_url")
      .range(0, 3)
      .order("date", { ascending: false });
    if (data) {
      datas.note = data;
    }
  };

  await getDevData();
  await getEnginData();
  await getNoteData();

  if (datas.dev.length > 0 || datas.engin.length > 0 || datas.note.length > 0) {
    return NextResponse.json({ data: datas, message: "success", status: 200 });
  } else {
    return NextResponse.json({
      error: datas,
      message: "글이 존재하지 않습니다",
      status: 404,
    });
  }
}
