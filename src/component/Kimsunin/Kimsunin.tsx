import Link from "next/link";
import "./Kimsunin.css"
import {KimsuninIc} from "../../../public/svg";

function Kimsunin(){
  return <div className="kimsunin">
    <div>
      <div>
        <Link href="/">
          <KimsuninIc/>
        </Link>
      </div>
      <h1>KIMSUNIN</h1>
      <h2>김선인의 개발공간</h2>
    </div>
  </div>;
}

export default Kimsunin;
