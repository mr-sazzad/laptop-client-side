import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import laptop from '../../assets/icon/laptop.png';
import CustomLink from '../CustomLink/CustomLink';
import { auth } from '../Firebase.init';
import Loading from '../Loading/Loading';

const Nav = () => {
  const [user, loading,] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  if (loading) {
    <Loading />
  }
    return (
        <nav className="flex flex-col justify-around  md:flex md:flex-row  px-14 md:justify-between items-center bg-green-50 h-32 md:h-16">
        <div className="main-header flex row justify-center items-center"><img className="header-icon hidden md:block" src={laptop} alt="" /> <h1  className="text-xl font-medium text-black web-name">Laptop</h1></div>
        <div>
          <ul className="flex justify-center items-center font-medium ">
            <li className="mr-5">
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li className="mr-5">
              <CustomLink to="/products">Inventory</CustomLink>
            </li>
            {user && <li className="mr-5"><CustomLink to="myProducts">My Items</CustomLink></li> }
            {user && <li className="mr-5"><CustomLink to="/addItem">Add Items</CustomLink></li>}
            <li className="mr-5"><CustomLink to='/manageinventory' >Manege Inventory</CustomLink></li>
            <li className="mr-5">
              <CustomLink to="/blogs">Blogs</CustomLink>
            </li>
            <li className="mr-5">
              {user ? <button onClick={logout} className='font-semibold'>Log Out</button>  :<CustomLink to="/login">Login</CustomLink>}
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Nav;