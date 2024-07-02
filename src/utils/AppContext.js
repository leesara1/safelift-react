import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext({});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [keyid, setKeyid] = useState(localStorage.getItem('keyid') || '');
  const [keynm, setKeynm] = useState(localStorage.getItem('keynm') || '');
  const [factid, setFactid] = useState(localStorage.getItem('factid') || '');
  const [factno, setFactno] = useState(localStorage.getItem('factno') || '');
  const [year, setYear] = useState(localStorage.getItem('year') || '');

  useEffect(() => {
    localStorage.setItem('keyid', keyid);
  }, [keyid]);

  useEffect(() => {
    localStorage.setItem('keynm', keynm);
  }, [keynm]);

  useEffect(() => {
    localStorage.setItem('factid', factid);
  }, [factid]);

  useEffect(() => {
    localStorage.setItem('factno', factno);
  }, [factno]);
  
  useEffect(() => {
    localStorage.setItem('year', year);
  }, [year]);

  const setAll = (keyid, keynm, factid, factno, year) => {
    setKeyid(keyid);
    setKeynm(keynm);
    setFactid(factid);
    setFactno(factno);
    setYear(year);
  };
  
  return (
    <AppContext.Provider value={{ 
      keyid, keynm, factid, factno, 
      setKeyid, setKeynm, setFactid, setFactno,
      year, setYear, setAll 
    }}>
      {children}
    </AppContext.Provider>
  );
};
