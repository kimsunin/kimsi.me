import Link from "next/link";
import {
  BlogIc,
  BmwIc,
  BookIc,
  CraftIc,
  MailIc,
  NongHaengIc,
  RocketIc,
} from "svg/index";

const iconMap: Record<string, React.ElementType> = {
  blog: BlogIc,
  gmail: MailIc,
  nonghaeng: NongHaengIc,
  bookShare: BookIc,
  bmw: BmwIc,
  blog_v1: RocketIc,
  craft: CraftIc,
};

type PropsType = {
  type: string;
  href: string;
  title: string;
  subtitle: string;
  target?: string;
};

function LinkBox({ type, href, title, subtitle, target }: PropsType) {
  const IconComponent = iconMap[type];

  return (
    <Link target={target} href={href} className="box">
      <div>
        <div className={`icon-box`}>
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

export default LinkBox;
