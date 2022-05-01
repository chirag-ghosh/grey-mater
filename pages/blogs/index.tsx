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
    <section className='blog-list'>
      <h2>A list of sample write-ups.</h2>
      <ul>
        {allPostsData.map(({ id, date, title }: any) => (
          <li key={id}>
            <a href={"/blog/" + id}>{title}</a>
            <p>{(new Date(date)).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
