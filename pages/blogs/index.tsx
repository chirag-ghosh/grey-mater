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
      <h2>Blogs</h2>
      <ul>
        {allPostsData.map(({ id }: any) => (
          <li>
            <a>{id}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
