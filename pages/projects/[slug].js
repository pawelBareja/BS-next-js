import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/projects/Header';

const Post = ({ htmlString, data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <Layout>
        <Header />
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        <img src={`/${data.thumbnail}`} width="200px" height="200px" />
        <p>{data.category}</p>
        <p>{data.client}</p>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('projects');
  console.log('files: ', files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  console.log('paths: ', paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('projects', slug + '.md'))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
