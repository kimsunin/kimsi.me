export type BlogType = {
  data: any;
  message: string;
  status: number;
};

export type BlogContentListType = {
  id: number;
  title: string;
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
