export const reformatDate = (dateStr) => {
  const months = [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ];
  const [month, day, year] = dateStr.split("/");
  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

export const updateMetaTags = (title, description, coverImage) => {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", description);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute("content", coverImage);
};
