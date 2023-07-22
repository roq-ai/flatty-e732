const mapping: Record<string, string> = {
  categories: 'category',
  companies: 'company',
  pages: 'page',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
