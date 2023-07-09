const mapping: Record<string, string> = {
  organizations: 'organization',
  staff: 'staff',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
