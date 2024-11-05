import { NextRequest, NextResponse } from "next/server";
import notion from "@/util/notion";
import { BlogContentListType } from "@/type/BlogType";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { results, has_more, next_cursor } = await notion.databases.query({
    database_id: "12ce53eb61bf80a28c7ac655ba72f001",
    sorts: [{ property: "created_date", direction: "descending" }],
    filter: {
      and: [
        {
          property: "checkbox",
          checkbox: { equals: true },
        },
        {
          property: "tag",
          multi_select: { contains: `${params.id}` },
        },
      ],
    },
  });

  const data: BlogContentListType = [];

  if (results) {
    results.forEach((item: any) => {
      data.push({
        id: item.id,
        title: item.properties.title.title[0]?.text.content,
        sub_title:
          item.properties.description.rich_text[0]?.text.content || null,
        date: item.properties.created_date.created_time.slice(0, 10),
        img_url: item.properties.img_url.rich_text[0]?.text.content || null,
      });
    });
  }

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
      code: 404,
    });
  }
}
