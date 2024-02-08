export const setDataLocalStorage = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getDataLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};
