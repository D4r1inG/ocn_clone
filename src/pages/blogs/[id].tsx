import { serialize } from 'next-mdx-remote/serialize';
import { GetServerSidePropsContext } from 'next';
import { read } from '@/utils/file-helper';
import { Post } from '@/components/blogs/post';

export default function Default({ source }) {
  return <Post source={source} />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = ctx.params.id;

  const source = read(`/public/contents/${id}.mdx`, 'file') as string;

  if (!source) {
    return { notFound: true };
  }

  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return { props: { source: mdxSource } };
}
