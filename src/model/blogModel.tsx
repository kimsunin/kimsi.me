const blogCategoryModel = [
  { title: "develop", subTitle: "개발에 관한 기록", href: "/blog/list/dev" },
  {
    title: "engineering",
    subTitle: "공학에 관한 기록",
    href: "/blog/list/engin",
  },
  {
    title: "note",
    subTitle: "제약없이 자유로운 기록",
    href: "/blog/list/note",
  },
];

const blogTitleMap: any = {
  dev: "「 develop 」 - 개발에 관한 기록",
  engin: "「 engineering 」 - 공학에 관한 기록",
  note: "「 note 」 - 제약없이 자유로운 기록",
};

export { blogCategoryModel, blogTitleMap };
