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
      <ul>
        {allPostsData.map(({ id, date, title, categories }: any) => (
          <li key={id}>
            <div className="top-bar">
              <a href={"/blog/" + id}>{title}</a>
              <p>{(new Date(date)).toLocaleDateString()}</p>
            </div>
            <div className="categories">
              {categories.map((category: string) => <span>{category}</span>)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
