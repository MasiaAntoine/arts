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
