export const sanitize = (text: string): string => {
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.body.textContent || "";
};
