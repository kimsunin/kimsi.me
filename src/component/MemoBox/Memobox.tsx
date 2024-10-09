import { QuotesIc } from "public/svg";

function MemoBox() {
  return (
    <div className="box">
      <div>
        <div className="icon-box">
          <QuotesIc />
        </div>
        <div className="text-box">
          <h1>기존 https://blog.kimsi.me에서 현재의 블로그로 이전했습니다.</h1>
        </div>
      </div>
    </div>
  );
}

export default MemoBox;
