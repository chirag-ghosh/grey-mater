import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/blogs";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: any) {
  return (
    <>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='markdown'>
        <div className='markdown-header'>
          <h1>{postData.title}</h1>
          <p>{postData.date}</p>
        </div>
        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}
