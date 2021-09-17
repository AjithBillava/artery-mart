import { Navigate, Route } from "react-router-dom"
import { useData } from "../../Context/DataContext"
// import { useLogin } from "../../Context/LoginContext"

export const PrivateRoute = ({path,...props}) =>{
    const {state:{isAuthenticated}} = useData()
    return isAuthenticated?
        <Route  path={path} {...props} />
        : 
        <Navigate state={{from:path}} replace to="/login"/>
}