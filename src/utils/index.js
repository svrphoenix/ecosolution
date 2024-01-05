export const scrollToElement = (type, refOrId, offset = 0) => {
  let element;
  switch (type) {
    case 'id':
      element = document.getElementById(refOrId);
      break;
    case 'ref':
      element = refOrId?.current;
      break;
  }

  if (element) {
    window.history.pushState('', '', `#${element.id}`);
    const top = element.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
    return true;
  } else return false;
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

export const createMenuItems = (sections, refs) =>
  Object.entries(sections)
    .map(([key, { menu }]) => ({ menu, ref: refs[key] }))
    .filter(item => item.menu !== undefined);

export const Mapper = obj => {
  const mapperObject = {};
  Object.keys(obj).forEach(item => (mapperObject[item] = item));
  return mapperObject;
};
