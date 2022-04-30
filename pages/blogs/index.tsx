import type { NextPage } from "next";
import { getSortedPostsData } from "../../lib/blogs";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

const Blogs: NextPage = ({ allPostsData }: any) => {
  return (
    <section>
      <h2>Blog</h2>
      <p>The blog is the basic flat normal structure.</p>
      <ul>
        {allPostsData.map(({ id, date, title }: any) => (
          <li key={id}>
            <a href={"/blog/" + id}>{title}</a>
            <p>{date}</p>
            <br />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
