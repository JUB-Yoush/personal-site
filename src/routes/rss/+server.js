import { fetchMarkdownPosts } from "../../lib";

const siteURL = 'https://jaydenpb.net';
const siteTitle = 'Jaydenpb Dot Net'
const siteDescription = "Jayden's blog and personal site"

export const prerender = true;

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const body = render(sortedPosts);
  const options = {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml'
    }
  };

  return new Response(body, options);
};

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
    .map(
      (post) => `<item>
<guid isPermaLink="true">${siteURL}/${post.path}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}/${post.path}</link>
<description>${post.meta.title}</description>
<tags>${post.meta.tags}</tags>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
</item>`
    )
    .join('')}
</channel>
</rss>
`;
