export const tokenKey = "antd-admin-key";
export const getToken = (key = tokenKey): string | null => {
  return localStorage.getItem(key);
};
export const setToken = (key = tokenKey, value: string): void => {
  localStorage.setItem(key, value);
};
export const clear = (): void => {
  localStorage.clear();
};
