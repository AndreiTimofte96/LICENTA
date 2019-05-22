const months = ['', 'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
  'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];

export const getTextMonth = ({ month, year }) => {
  return `${months[month]} ${year}`;
};

export const getDateFromMiliseconds = (miliseconds) => {
  const date = new Date(miliseconds);
  const month = date.getMonth();
  return `${date.getDate()} ${months[month]} ${date.getFullYear()}`;
};
