export interface Post {
  id: string;
  slug: string; // Notion page ID used as URL slug
  title: string;
  publishDate: string | null; // ISO date string, e.g. "2024-01-15"
  url: string | null; // Optional external URL from the Notion URL field
  status: 'Draft' | 'Scheduled' | 'Unpublished' | 'Published' | null;
}

export interface PostWithContent extends Post {
  markdown: string;
}
