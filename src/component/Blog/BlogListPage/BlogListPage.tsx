import MemoBox from "@/component/Box/MemoBox/Memobox";
import "./BlogListPage.css";
import LinkBox from "@/component/Box/LinkBox/LinkBox";

function BlogListPage() {
  return (
    <ul className="blog-list-page">
      <li className="memo">
        <MemoBox text="김선인의 두번째 블로그 입니다" />
      </li>
      <li className="rotate-r">
        <LinkBox
          type="blog"
          href="/blog/dev"
          title="develop"
          subtitle="개발에 관한 기록"
        />
      </li>
      <li className="rotate-l">
        <LinkBox
          type="blog"
          href="/blog/engin"
          title="engineering"
          subtitle="공학에 관한 기록"
        />
      </li>
      <li className="rotate-r">
        <LinkBox
          type="blog"
          href="/blog/note"
          title="note"
          subtitle="제약없이 자유로운 기록"
        />
      </li>
    </ul>
  );
}

export default BlogListPage;
