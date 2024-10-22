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
        className="w-full h-full shadow-sm rounded-2xl border"
        center={{ lat: 36.37024018391257, lng: 127.34599754699049 }}
        draggable={false}
        zoomable={false}
        level={7}
        disableDoubleClick={true}
      >
        <MapMarker
          position={{ lat: 36.37024018391257, lng: 127.34599754699049 }}
        />
      </Map>
      <div className="absolute px-[10px] text-[14px] py-[4px] bg-white/90 dark:bg-black/90 rounded-lg border left-[20px] bottom-[20px] z-10">
        🏠 cnu, daejeon
      </div>
    </Link>
  );
}

export default MapBox;
