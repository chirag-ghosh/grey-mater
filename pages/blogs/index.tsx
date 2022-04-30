import type { NextPage } from "next";
import { getSortedPostsData } from "../../lib/blogs";
import { biodata, links } from "../../basicData";
import EmailPopup from "../..//components/emailPopup";

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
            <p>{title}</p>
            <p>{date}</p>
            <p>{id}</p>
            <br />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
