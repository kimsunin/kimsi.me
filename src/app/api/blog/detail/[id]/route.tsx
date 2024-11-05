import { NextRequest, NextResponse } from "next/server";
import notion from "@/util/notion";
import { BlogContenDetailType } from "@/type/BlogType";
import { NotionAPI } from "notion-client";

const notionApi = new NotionAPI();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const recordMap: any = await notion.pages.retrieve({
    page_id: params.id,
  });

  const recordMap2: any = await notionApi.getPage(params.id);

  const data: BlogContenDetailType = {
    title: recordMap.properties.title.title[0]?.text.content,
    content: recordMap2,
    date: recordMap.properties.created_date.created_time.slice(0, 10),
  };

  if (data) {
    return NextResponse.json({
      data: data,
      message: "success",
      status: 200,
    });
  } else {
    return NextResponse.json({
      error: "error",
      message: "글이 존재하지 않습니다",
      status: 404,
    });
  }
}
