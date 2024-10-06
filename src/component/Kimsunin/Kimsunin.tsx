import Link from "next/link";
import "./Kimsunin.css";
import { KimsuninIc } from "svg/index";

function Kimsunin() {
  return (
      <div className="kimsunin">
        <div>
          <div>
            <Link href="/public">
              <KimsuninIc/>
            </Link>
          </div>
          <h1>KIMSUNIN</h1>
          <p>개발이 즐거운 개발자 김선인입니다</p>
        </div>
      </div>
  );
}

export default Kimsunin;
