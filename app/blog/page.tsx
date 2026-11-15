import { getSortedPostsData } from "../../lib/blogs";

export default function Blogs() {
  const allPostsData = getSortedPostsData().filter(({ draft }: any) => {
    return !draft || process.env.NODE_ENV === "development";
  });

  return (
    <section className="blog-list">
      <ul>
        {allPostsData.map(({ id, date, title, categories }: any) => (
          <li key={id}>
            <div className="top-bar">
              <a href={"/blog/" + id}>{title}</a>
              <p>{new Date(date).toLocaleDateString("en-IN")}</p>
            </div>
            <div className="categories">
              {categories.map((category: string) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
