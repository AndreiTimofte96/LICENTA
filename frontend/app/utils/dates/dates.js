const months = ['', 'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
  'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];

const days = ['', 'luni', 'marti', 'miercuri', 'joi', 'vineri', 'sambata', 'duminica'];

export const getTextMonth = ({ month, year }) => {
  return `${months[month]} ${year}`;
};

export const getFullTextDate = ({ month, year }) => {
  return `${months[month]} ${year}`;
};

export const getDateFromMiliseconds = (miliseconds) => {
  const date = new Date(miliseconds);
  const month = date.getMonth();
  return `${date.getDate()} ${months[month]} ${date.getFullYear()}`;
};


export const getDayOfWeekFullDateFromMiliseconds = (miliseconds) => {
  const currDate = new Date(miliseconds);
  const day = currDate.getDay();
  return `${days[day]}, ${getDateFromMiliseconds(miliseconds)}`;
};