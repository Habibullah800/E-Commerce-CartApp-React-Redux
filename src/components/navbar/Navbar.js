import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cart from './cart.gif'


const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <div className="navbar fixed shadow-md  z-50 w-full bg-[#E2A529]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Burger Items</a></li>

                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Burger World</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to='/'>Home</Link></li>
                        <li> <Link to='/featureBurger'>Burger Items</Link></li>
                        <li tabIndex={0}>
                            <a>
                                Review
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Add Review</a></li>
                                <li><a>Delete Review</a></li>

                            </ul>
                        </li>
                        <li> <Link to='/chef'>Our chef</Link></li>
                        <li><a>About Us</a></li>
                        <li> <Link to='/card'>Card</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">

                    <div>
                        <button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >


                            <div className='px-10 '>
                                <Badge badgeContent={4} color="success">
                                    <FontAwesomeIcon className='h-[32px] text-[#0000FF]' icon={faCartShopping} />

                                </Badge>
                            </div>


                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <div className='m-2' >
                                <span className='flex flex-row-reverse '>
                                    <FontAwesomeIcon onClick={handleClose} className='h-[30px] w-[30px] text-[#000] mr-3 mb-1 ' icon={faXmark} />
                                </span>

                                <span className='flex ml-2'>
                                    <p className='p-4 text-lg text-[#000] font-semibold'>Your Cart is Empty</p>
                                    <img className='h-16 h-16 pr-2' src={cart} alt="Shoes" />
                                </span>
                            </div>

                        </Menu>

                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;