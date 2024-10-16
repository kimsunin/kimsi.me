import Link from "next/link";
import { Circle, Map, MapMarker } from "react-kakao-maps-sdk";

function MapBox() {
  return (
    <Link
      href="https://m.map.kakao.com/actions/searchView?q=%EC%B6%A9%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90&wxEnc=LVSOTP&wyEnc=QNLTTMN&lvl=4"
      target="_blank"
      className="rounded-2xl relative"
    >
      <Map
        center={{ lat: 36.37024018391257, lng: 127.34599754699049 }}
        style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
        draggable={false}
        zoomable={false}
        level={7}
        disableDoubleClick={true}
      >
        <MapMarker
          position={{ lat: 36.37024018391257, lng: 127.34599754699049 }}
        />
      </Map>
      <div className="absolute px-[10px] py-[4px] bg-white/90 dark:bg-black/90 rounded-lg left-[20px] bottom-[20px] z-10">
        🏠 cnu, daejeon
      </div>
    </Link>
  );
}

export default MapBox;
