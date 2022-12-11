import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { Layout } from "../pages/Layout";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/login" element={ <Login /> }  />
            <Route path="/register" element={ <Register /> } />
            {
                /*
                    Auth routes
                */
            }
            <Route path="/*" element={ <Navigate to='/login' /> } />
            {
                /*
                    Redirect 
                
                */
            }
            <Route path='/'  element={ <Layout /> }  />
            {
                /**
                    Dash principal
                  
                 */
            }
         </Routes>
    );
}
