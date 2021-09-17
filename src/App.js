import './App.css';

import {Navigation }from "./Components/Navigation"
import { Route, Routes } from 'react-router';
import { Product } from './Components/Product';
import { Cart } from './Components/Cart';
import { Wishlist } from './Components/Wishlist';
import { useEffect } from 'react';
import { Login } from './Components/login';
import { PrivateRoute } from './Components/private route/PrivateRoute';
import { Register } from './Components/register';
import { useData } from './Context/DataContext';
import { LoaderComponent } from './Components/loader';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const {loadData,loadUser,state} = useData()
 

  useEffect(() => {
		let isMounted = true;
		if (isMounted) {
      loadData()
			loadUser()
		}
		return () => {
			isMounted = false;
		};
	}, []);

  toast.configure()
  return (
    <div className="App">
      <Navigation/>
      
      {state.isLoading && <LoaderComponent/>}
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Product/>} />
        <PrivateRoute path="/cart" element={<Cart/>} />
        <PrivateRoute path="/wishlist" element={<Wishlist/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>

   
  );
}

export default App;
