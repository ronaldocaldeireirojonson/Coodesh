export type SessionCache = {
  id: string;
  email: string;
  expiresAt: string;
};

export const CacheSession = (fields: SessionCache) => {
  const { id, email, expiresAt } = fields;
  localStorage.setItem('id', id);
  localStorage.setItem('email', email);
  localStorage.setItem('expiresAt', expiresAt);
};

export const isCachedSessionValid = (): boolean => {
  const expiresAt = localStorage.getItem('expiresAt');
  if (!expiresAt) return false;
  if (!localStorage.getItem('id') || !localStorage.getItem('email'))
    return false;

  return new Date(expiresAt) > new Date();
};
