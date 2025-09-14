import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface TokenProp {
  authentication: string | null;
  setAuthentication: Dispatch<SetStateAction<string | null>>;
}

const TokenContext = createContext<TokenProp | undefined>(undefined);

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [authentication, setAuthentication] = useState<string | null>(null);

  return (
    <TokenContext.Provider
      value={{
        authentication,
        setAuthentication,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useGlobalUserContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("screen context is undefined");
  }
  return context;
};
