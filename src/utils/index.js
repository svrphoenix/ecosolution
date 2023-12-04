export const ScrollToElement = (type, ref) => {
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
