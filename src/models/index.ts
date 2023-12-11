export type Post = {
  content: string | TrustedHTML;
  slug: string;
  title: string;
  summary: string;
  createdAt: string;
};
