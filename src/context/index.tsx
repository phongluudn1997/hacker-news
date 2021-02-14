import { BrowserRouter } from "react-router-dom";

const AppProviders = ({ children }: any) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export { AppProviders };
