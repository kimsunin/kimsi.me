import { QuotesIc } from "public/svg";

type PropsType = {
  text: string;
};

function WidgetMemo({ text }: PropsType) {
  return (
    <div className="box bg-yellow-50 dark:bg-opacity-10">
      <div>
        <div className="icon-box">
          <QuotesIc />
        </div>
        <div className="text-box">
          <h2 className="font-serif text-black/70 dark:text-white/50">
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WidgetMemo;
