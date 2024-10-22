import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/util/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  console.log(req.json());

  let { data, error } = await supabase
    .from(params.slug[0])
    .select("title, sub_title, content")
    // Filters
    .eq("id", params.slug[1])
    .single();

  if (data) {
    return NextResponse.json({ data: data, message: "success", status: 200 });
  } else {
    return NextResponse.json({
      error: error,
      message: "글이 존재하지 않습니다",
      status: 404,
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const { data, error } = await supabase
    .from(params.slug[0])
    .delete()
    .eq("id", params.slug[1]);
  if (!error) {
    return NextResponse.json({
      data: data,
      message: "삭제가 완료되었습니다",
      status: 200,
    });
  } else {
    return NextResponse.json({
      error: error,
      message: "삭제가 완료되지 않았습니다",
      status: 200,
    });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const request = await req.json();
  const { data, error } = await supabase
    .from(params.slug[0])
    .update({
      title: request.title,
      sub_title: request.subTitle,
      content: request.content,
    })
    .eq("id", params.slug[1])
    .select();
  if (data) {
    return NextResponse.json({
      data: data,
      message: "글 수정이 완료되었습니다",
      status: 200,
    });
  } else {
    return NextResponse.json({
      error: error,
      message: "글 수정이 완료되지 않았습니다",
      status: 404,
    });
  }
}
