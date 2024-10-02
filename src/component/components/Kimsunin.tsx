import Link from "next/link";
import "../styles/Kimsunin.css";
import { KimsuninIc } from "svg/index";

function Kimsunin() {
  return (
    <div className="kimsunin">
      <div>
        <div>
          <Link href="/public">
            <KimsuninIc />
          </Link>
        </div>
        <h1>KIMSUNIN</h1>
        <p>김선인의 개발공간</p>
      </div>
    </div>
  );
}

export default Kimsunin;
