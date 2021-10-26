import type { Node as ReactNode } from 'react';

export type Node = {
  fields: {
    slug: string,
    categorySlug?: string,
    tagSlugs?: string[]
  },
  frontmatter: {
    date: string,
    description?: string,
    category?: string,
    tags?: string[],
    title: string,
    socialImage?: {
      publicURL: string
    }
  },
  html: string,
  id: string
};

export type Edge = {
  node: Node
};

export type Edges = Array<Edge>;

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges,
  },
  group: {
    fieldValue: string,
    totalCount: number
  }[]
};

export type MarkdownRemark = Node;