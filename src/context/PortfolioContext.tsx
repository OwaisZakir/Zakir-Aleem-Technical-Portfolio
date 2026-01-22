import React, { createContext, useContext, ReactNode } from 'react';
import { portfolioData } from '../data/portfolioData';

type PortfolioDataType = typeof portfolioData;

const PortfolioContext = createContext<PortfolioDataType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};