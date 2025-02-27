import { Posts } from '@/components/blogs/posts';
import { read } from '@/utils/file-helper';
import matter from 'gray-matter';
import { GetStaticPropsContext } from 'next';

export default function Default({ blogs }) {
  return <Posts blogs={blogs} />;
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const locale = ctx.locale || 'vi';
  const fileNames = read(`/public/contents/${locale}`, 'dir');

  const blogPosts = [];

  for (const fileName of fileNames) {
    const rawContent = read(`/public/contents/${locale}/${fileName}`, 'file') as string;

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...frontmatter,
    });
  }

  return {
    props: {
      blogs: blogPosts.sort((p1, p2) => (p1.date < p2.date ? 1 : -1)),
    },
  };
}
