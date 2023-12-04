import { createContext, useContext } from 'react';

export const RefsContext = createContext();

export const useRefsContext = () => useContext(RefsContext);
