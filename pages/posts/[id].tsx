import Head from "next/head";
import Link from "next/link";
import { Button } from "antd";
import { useState } from "react";

import { Post, SinglePost } from "../../components/singlePost";
import { GetStaticPaths, GetStaticProps } from "next";

const pageIds = ["1", "2", "3", "4", "5"];

export default function PostBySlug(props: Post) {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <Head>
        <title>Post page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{props.title}</h1>
      <SinglePost avatar={props.avatar} title={props.title} content={props.content} />
      <Button onClick={() => setShowText(!showText)}>Show/hide text</Button>

      {showText && <p>This is hidden text</p>}
      {pageIds.map((pageId, idx) => (
        <Link key={idx} href={`/posts/${pageId}`}>
          <a style={{ marginRight: 30 }}>Go to page {pageId}</a>
        </Link>
      ))}
      <div>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const res = await await fetch(`https://5f9acb639d94640016f71438.mockapi.io/api/v1/Blogs/${id}`);
  const blogDetail = await res.json();
  const post = {
    title: blogDetail.name,
    content: blogDetail.content,
    avatar: blogDetail.avatar,
  };
  return {
    props: post,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://5f9acb639d94640016f71438.mockapi.io/api/v1/Blogs");
  const blogList = await res.json();

  const paths = blogList.map((blog) => ({
    params: { id: blog.id },
  }));
  return {
    paths,
    fallback: true,
  };
};
