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
      <p>김선인의 개발공간</p>
    </div>
  </div>;
}

export default Kimsunin;
