export const setDataLocalStorage = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getDataLocalStorage = (key: string): any => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : [];
  } else {
    return [];
  }
};
