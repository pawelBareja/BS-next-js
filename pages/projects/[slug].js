import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';
import { Layout } from '../../layout/Layout';
import { Header } from '../../components/projects/Header';
import Gallery from '../../components/projects/Gallery';

const Post = ({ htmlString, data }) => {
  const { client, category, description, thumbnail, image2, image3, image4 } =
    data;
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <Layout>
        <Header client={client} category={category} description={description} />
        <Gallery
          thumbnail={thumbnail}
          image2={image2}
          iamge3={image3}
          image4={image4}
        />
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
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
