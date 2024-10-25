export type BlogType = {
  title: string;
  sub_title: string;
  content: string;
  date: string;
};

export type BlogContentListType = {
  id: number;
  title: string;
  sub_title: string | null;
  date: string;
  img_url: string | null;
}[];

export type BlogContentGroupListType = {
  dev: BlogContentListType;
  engin: BlogContentListType;
  note: BlogContentListType;
};

export type BlogContenDetailType = {
  title: string;
  content: string;
  date: string;
};

export type BlogEditType = {
  type?: string;
  title: string;
  subTitle: string;
  content: string | undefined;
};
