import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/util/supabase";

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();

    if (!request.type) {
      return NextResponse.json({
        error: "error",
        message: "타입이 지정되지 않았습니다",
        status: 404,
      });
    } else if (request.title == "") {
      return NextResponse.json({
        error: "error",
        message: "제목을 작성해주세요",
        status: 404,
      });
    } else if (request.content == "") {
      return NextResponse.json({
        error: "error",
        message: "내용을 작성해주세요",
        status: 404,
      });
    } else if (request.type && request.title && request.content) {
      const { data, error } = await supabase
        .from(request.type)
        .insert([{ title: request.title, content: request.content }])
        .select();

      if (data) {
        return NextResponse.json({
          data: data,
          message: "글 작성이 완료되었습니다",
          status: 200,
        });
      } else {
        return NextResponse.json({
          error: error,
          message: "글 작성이 완료되지 않았습니다",
          status: 404,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
