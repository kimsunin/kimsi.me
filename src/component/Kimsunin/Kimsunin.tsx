import Link from "next/link";
import "./Kimsunin.css";
import { KimsuninIc } from "svg/index";

function Kimsunin() {
  return (
    <div className="kimsunin">
      <div>
        <div>
          <Link href="/">
            <KimsuninIc />
          </Link>
        </div>
        <h1>Kimsunin</h1>
        <p>개발이 즐거운 개발자 김선인입니다</p>
        <p>@2024 designed by kimsunin</p>
      </div>
    </div>
  );
}

export default Kimsunin;
