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

export const reformatDateFullMonth = (dateStr) => {
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
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

export const capitalizeWords = (str) => {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};
