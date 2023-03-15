type AuthenticatedUser = {
  tag: 'authenticated',
  id: string,
}
export const authenticatedUser = (user: Omit<AuthenticatedUser, 'tag'>): AuthenticatedUser => ({ tag: 'authenticated', ...user });

type UnauthorizedUser = {
  tag: 'unauthorized',
}
export const unauthorizedUser = (): UnauthorizedUser => ({ tag: 'unauthorized' });

type UnauthenticatedUser = {
  tag: 'unauthenticated',
}
export const unauthenticatedUser = (): UnauthenticatedUser => ({ tag: 'unauthenticated' });

export type User = AuthenticatedUser | UnauthorizedUser | UnauthenticatedUser;
