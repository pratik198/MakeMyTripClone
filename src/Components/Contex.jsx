import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext);
  }

  export function AuthProvider({ children }){
    return (
        <AuthContext.Provider value={{}}>
          {children}
        </AuthContext.Provider>
      );
    }