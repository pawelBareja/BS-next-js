import { NextPage, GetStaticProps } from "next";

const Blog = ({ content }) => {
  const { attributes } = content;
  return (
    <>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <img src={attributes.hero_image} alt="hero image" />
    </>
  );
};
export const getStaticProps = async () => {
  const content = await import(`../content/pages/${"blog"}.md`);
  return { props: { content: content.default } };
};
export default Blog;
