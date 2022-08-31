import React from "react";
import { getAPI } from "../../../poc-next/servces/api";
import Preview from "../../src/components/Preview/Preview";
import { NextSeo } from "next-seo";

const PostSlug = ({ post }) => {
  const SEO = {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
      description: post.body,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Preview post={post} />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { slug } = query;
  console.log(slug);
  if (slug) {
    try {
      const response = await getAPI(`posts/${slug}`);
      if (response && response?.data) {
        console.log(response.data);
        return { props: { post: response?.data } };
      }
    } catch (error) {
      console.log("err", error);
    }
  }
  return { props: { post: {} } };
}

export default PostSlug;
