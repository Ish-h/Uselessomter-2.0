import { createContext, useContext, useState } from 'react';

const TrashContext = createContext();

export const TrashProvider = ({ children }) => {
  const [resultData, setResultData] = useState(null);

  return (
    <TrashContext.Provider value={{ resultData, setResultData }}>
      {children}
    </TrashContext.Provider>
  );
};

export const useTrashContext = () => useContext(TrashContext);
