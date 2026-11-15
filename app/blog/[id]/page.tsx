import type { Metadata } from "next";
import { getAllPostIds, getPostData } from "../../../lib/blogs";
import PrismHighlight from "../../../components/prismHighlight";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostIds().map(({ params }) => params);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const postData: any = await getPostData(id);
  return {
    title: postData.title,
    description: postData.description,
    // Page-level openGraph/twitter replace the layout's, so repeat the shared fields.
    openGraph: {
      type: "website",
      url: "https://www.chiragghosh.dev/",
      title: postData.title,
      description: postData.description,
      images: ["/metatag.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.description,
      images: ["/metatag.jpg"],
    },
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const postData: any = await getPostData(id);

  return (
    <article className="markdown">
      <div className="markdown-header">
        <h1>{postData.title}</h1>
        <p>{new Date(postData.date).toLocaleDateString("en-IN")}</p>
      </div>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <PrismHighlight />
    </article>
  );
}
