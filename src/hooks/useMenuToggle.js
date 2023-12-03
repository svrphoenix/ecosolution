import { useState } from 'react';

const useMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuToogle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('hidden');
  };

  return [isMenuOpen, onMenuToogle];
};

export default useMenuToggle;
