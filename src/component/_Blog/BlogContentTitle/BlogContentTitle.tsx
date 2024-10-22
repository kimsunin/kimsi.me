import { CalendarIc } from "svg/index";
import "./BlogContentTitle.css";

type PropsType = {
  title: string | undefined;
  date: string | undefined;
};

function BlogContentTitle({ title, date }: PropsType) {
  return (
    <div className="blog-title">
      <h1>{title}</h1>
      <div>
        <CalendarIc />
        <span>{date}</span>
      </div>
    </div>
  );
}

export default BlogContentTitle;
