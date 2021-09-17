import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export const LoaderComponent =()=>{
    return(
        <div className="horizontal-card center wrap loader">
            {/* <h1> loading </h1> */}
            <Loader
                type="Oval"
                color="var(--primary-bg)"
                height={100}
                width={100}
                // timeout={3000} //3 secs
            />
        </div>
    )
}