"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./CustomImage.css";
import { ErrorImgIc } from "svg/index";

type PropsType = {
  src: string | null | undefined;
};

// 이미지가 없는 경우 에뤄 발생 -> true -> 기본이미지 렌더링
function CustomImage({ src }: PropsType) {
  const [isImgError, setIsImgError] = useState<boolean>(true);

  useEffect(() => {
    if (src == null || "" || undefined) {
      setIsImgError(true);
    } else setIsImgError(false);
  }, [src]);

  if (isImgError)
    return (
      <div className="error-image">
        <ErrorImgIc />
      </div>
    );

  if (src && !isImgError) {
    return (
      <div className="custom-image">
        <Image src={src} alt="img" priority={true} width={800} height={800} />
      </div>
    );
  }
}

export default CustomImage;
