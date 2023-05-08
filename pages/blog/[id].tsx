import Head from "next/head";
import Prism from "prismjs";
import { getAllPostIds, getPostData } from "../../lib/blogs";
import { useEffect } from "react";

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

  useEffect(() => {
    Prism.highlightAll();
  }, [postData])

  return (
    <>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='markdown'>
        <div className='markdown-header'>
          <h1>{postData.title}</h1>
          <p>{(new Date(postData.date)).toLocaleDateString()}</p>
        </div>
        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}
