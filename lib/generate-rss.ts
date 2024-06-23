import { escape } from '@/lib/utils/htmlEscaper';
import siteMetadata from '@/data/siteMetadata';
import { PostFrontMatter } from 'types/PostFrontMatter';

export const generateRssItem = (post: PostFrontMatter, type: 'blog' | 'courses') => `
  <item>
    <guid>${siteMetadata.siteUrl}/${type === 'courses' ? 'courses' : 'blog'}/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteMetadata.siteUrl}/${type === 'courses' ? 'courses' : 'blog'}/${post.slug}</link>
    ${post.summary ? `<description>${escape(post.summary)}</description>` : ''}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${siteMetadata.author})</author>
    ${post.tags ? post.tags.map(t => `<category>${t}</category>`).join('') : ''}
  </item>
`;

export const generateRss = (rssItems: string[]) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteMetadata.title)}</title>
      <link>${siteMetadata.siteUrl}/feed.xml</link>
      <description>${escape(siteMetadata.description)}</description>
      <language>${siteMetadata.language}</language>
      <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
      <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
      ${rssItems.join('')}
    </channel>
  </rss>
`;
