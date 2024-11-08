import {
  BlogIc,
  BmwIc,
  BookIc,
  CraftIc,
  WidgetMailIc,
  NongHaengIc,
  RocketIc,
  DevelopIc,
  PencilIc,
  HomeIc,
  BrushIc,
  WidgetInstagram,
} from "svg/index";

export const iconMap: Record<string, React.ElementType> = {
  blog: BlogIc,
  gmail: WidgetMailIc,
  nonghaeng: NongHaengIc,
  book: BookIc,
  bmw: BmwIc,
  blog_v1: RocketIc,
  craft: CraftIc,
  dev: DevelopIc,
  note: PencilIc,
  home: HomeIc,
  edit: BrushIc,
  instagram: WidgetInstagram,
};
