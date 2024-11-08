import Link from "next/link";
import { iconMap } from "@/model/iconModel";

type PropsType = {
  type: string;
  href: string;
  title: string;
  subtitle: string;
  target?: string;
  bgColor?: string;
  iconBoxStyle: "icon-box" | "icon-box-full";
};

function hexToRgba(hex: string | undefined, opacity: number = 0.08) {
  if (hex) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
}

function WidgetLink({
  type,
  href,
  title,
  subtitle,
  target,
  bgColor,
  iconBoxStyle,
}: PropsType) {
  const IconComponent = iconMap[type];

  return (
    <Link
      target={target}
      href={href}
      className="box"
      style={{ backgroundColor: hexToRgba(bgColor) }}
    >
      <div>
        <div className={`${iconBoxStyle}`}>
          <IconComponent />
        </div>
        <div className={"text-box"}>
          <p>{title}</p>
          <p className="text-blur">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default WidgetLink;
