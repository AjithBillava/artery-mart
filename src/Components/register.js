import { useReducer } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext";
// import { useLocation, useNavigate } from "react-router-dom"
// import { useLogin } from "../Context/LoginContext"

export const registerReducer  = (state,{type,payload}) =>{
    switch (type){
        case "email":
            return {
            ...state,
            email: payload
            };
        case "firstName":
            return {
            ...state,
            firstName: payload
            };
        case "lastName":
            return {
            ...state,
            lastName: payload
            };
        case "password":
            return {
            ...state,
            password: payload
            };
        case "reset":
            return {
            ...state,
            password: "",
            email: "",
            firstName: "",
            lastName: ""
            };
        default:
            return state;
        }
}

export const Register = () =>{
    const {registerUser} = useData()
    const {state} =useLocation()
    const navigate = useNavigate()
    const [{ firstName,lastName, email, password }, dispatch] = useReducer(registerReducer, {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      });

    return(
        <div className="horizontal-card center wrap main-section">

            <form className="card block-card ">
                <div className="mr1 sub-heading  center">Register page</div>
                <div className="vertical-card center">
                <input className="input curve" type="string" placeholder="First name" required 
                    onChange={(e) =>
                        dispatch({ type: "firstName", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="string" placeholder="Last name" required
                    onChange={(e) =>
                        dispatch({ type: "lastName", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="email" placeholder="Email" required 
                    onChange={(e) =>
                        dispatch({ type: "email", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="password" placeholder="Password" required
                    onChange={(e) =>
                        dispatch({ type: "password", payload: e.target.value })
                      }></input>
                    <button  className="secondary-btn md-btn btn" value="send" onClick ={(e)=>{
                        registerUser(firstName,lastName,email,password,state,navigate)
                        e.preventDefault()} }>
                        Register
                    </button>
                    <div className="grey-text ">
                        Already registered ?
                        <Link to="/register"> Login here</Link>
                    </div>
                </div>
                
            </form>
            
        </div>
    )
} 