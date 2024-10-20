import { supabase } from "@/util/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(await req.json());

  const { data, error } = await supabase
    .from(params.id)
    .select("id,title,sub_title,date,img_url")
    .order("date", { ascending: false });

  if (data) {
    return NextResponse.json({ data: data, message: "success", status: 200 });
  } else {
    return NextResponse.json({
      error: error,
      message: "글이 존재하지 않습니다",
      code: 404,
    });
  }
}
