import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { Post, PostWithContent } from './types';

const apiKey = process.env.NOTION_API_KEY;
if (!apiKey) throw new Error('NOTION_API_KEY is not set');

const notion = new Client({ auth: apiKey });

const n2m = new NotionToMarkdown({ notionClient: notion });

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function pageToPost(page: PageObjectResponse): Post {
  const props = page.properties;

  const titleProp = props['Name'];
  const title =
    titleProp?.type === 'title'
      ? (titleProp.title[0]?.plain_text ?? 'Untitled')
      : 'Untitled';

  const dateProp = props['Publish Date'];
  const publishDate =
    dateProp?.type === 'date' ? (dateProp.date?.start ?? null) : null;

  const urlProp = props['URL'];
  const url = urlProp?.type === 'url' ? (urlProp.url ?? null) : null;

  const selectProp = props['Select'];
  const status =
    selectProp?.type === 'select'
      ? ((selectProp.select?.name ?? null) as Post['status'])
      : null;

  return {
    id: page.id,
    slug: page.id,
    title,
    publishDate,
    url,
    status,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Returns all posts where Select = "Published", sorted by Publish Date descending.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) throw new Error('NOTION_DATABASE_ID is not set');

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Select',
      select: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'Publish Date',
        direction: 'descending',
      },
    ],
  });

  return (response.results as PageObjectResponse[]).map(pageToPost);
}

/**
 * Fetches a single post's metadata and its full Notion page content as Markdown.
 * Returns null if the page does not exist or is not accessible.
 */
export async function getPostBySlug(slug: string): Promise<PostWithContent | null> {
  try {
    const page = (await notion.pages.retrieve({
      page_id: slug,
    })) as PageObjectResponse;

    const mdBlocks = await n2m.pageToMarkdown(slug);
    const { parent: markdown } = n2m.toMarkdownString(mdBlocks);

    return {
      ...pageToPost(page),
      markdown,
    };
  } catch (err) {
    console.error('[notion] getPostBySlug failed for slug:', slug, err);
    return null;
  }
}

/**
 * Returns all page IDs for published posts — used by generateStaticParams.
 */
export async function getPublishedPostSlugs(): Promise<string[]> {
  const posts = await getPublishedPosts();
  return posts.map((p) => p.slug);
}
