import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticPropsContext } from 'next';
import { read } from '@/utils/file-helper';
import { Post } from '@/components/blogs/post';

export default function Default({ source }) {
  return <Post source={source} />;
}

export async function getStaticPaths({ locales }) {
  const fileNameEn = read('/public/contents/en', 'dir') as string[];

  const paths = fileNameEn.flatMap((fileName) => {
    return locales.map((locale) => {
      return {
        params: { id: fileName.replace('.mdx', '') },
        locale,
      };
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const id = ctx.params.id;
  const locale = ctx.locale || 'vi';

  const source = read(`/public/contents/${locale}/${id}.mdx`, 'file') as string;

  if (!source) {
    return { notFound: true };
  }

  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return { props: { source: mdxSource } };
}
