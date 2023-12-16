export const scrollToElement = (type, ref) => {
  let element = undefined;
  switch (type) {
    case 'id':
      element = document.getElementById(ref);
      element?.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'ref':
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      break;
  }
};

export const phoneNormalize = number =>
  number
    .split('')
    .filter(item => item.trim().length)
    .join('');

export const numberWithCommas = number => {
  const numberParts = number.toFixed(3).split('.');
  numberParts[0] = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return numberParts.join(',');
};

export const createMenuItems = sections =>
  Object.values(sections)
    .map(section => section.menu)
    .filter(menu => menu !== undefined);
