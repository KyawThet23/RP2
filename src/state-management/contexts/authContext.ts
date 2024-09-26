import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>
}

//Hello Oppa Ko Ko yay
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)

export default AuthContext