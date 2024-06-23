import Draft from '@/components/Draft';
import { MDXLayoutRenderer } from '@/components/MDXComponents';
import {generateRss, generateRssItem} from '@/lib/generate-rss';
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@/lib/mdx';
import fs from 'fs';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import { PostFrontMatter } from 'types/PostFrontMatter';
import { Toc } from 'types/Toc';

const DEFAULT_LAYOUT = 'PostLayout';

export async function getStaticPaths() {
  const posts = getFiles('blog');
  return {
    paths: posts.map(post => ({
      params: {
        slug: formatSlug(post).split('/'),
      },
    })),
    fallback: false,
  };
}

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  post: { mdxSource: string; toc: Toc; frontMatter: PostFrontMatter };
  authorDetails: AuthorFrontMatter[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}> = async ({ params }) => {
  // Fetch all course posts
  const coursePosts = getFiles('courses');
  const coursesFrontMatter = await getAllFilesFrontMatter('courses');

  // Fetch all blog posts
  const slug = (params.slug as string[]).join('/');
  const allPosts = await getAllFilesFrontMatter('blog');
  const postIndex = allPosts.findIndex(post => formatSlug(post.slug) === slug);
  const prev: { slug: string; title: string } = allPosts[postIndex + 1] || null;
  const next: { slug: string; title: string } = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug<PostFrontMatter>('blog', slug);
  // @ts-ignore
  const authorList = post.frontMatter.authors || ['default'];
  
  // Fetch details of authors asynchronously
  const authorPromise = authorList.map(async author => {
    const authorResults = await getFileBySlug<AuthorFrontMatter>('authors', [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  const rssItems = [
    ...allPosts.map(post => generateRssItem(post, 'blog')),
    ...coursesFrontMatter.map(post => generateRssItem(post, 'courses')),
  ];

  // Update or create RSS feed
  if (rssItems.length > 0) {
    const rss = generateRss(rssItems);
    fs.writeFileSync('./public/feed.xml', rss);
  }


  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  };
};



export default function Blog({
  post,
  authorDetails,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, toc, frontMatter } = post;

  return (
    <>
      {'draft' in frontMatter && frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <Draft />
      )}
    </>
  );
}
