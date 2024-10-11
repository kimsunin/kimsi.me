import { QuotesIc } from "public/svg";

function MemoBox() {
  return (
    <div className="box ">
      <div>
        <div className="icon-box">
          <QuotesIc />
        </div>
        <div className="text-box">
          <h1 className="font-serif text-black/70 dark:text-white/50">
            끊임없이 고민하고 사색하며 기록하고자 노력합니다.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MemoBox;
