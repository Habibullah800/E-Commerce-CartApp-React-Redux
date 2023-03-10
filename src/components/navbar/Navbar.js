import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Badge } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import cart from '../assets/cart.gif'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../../redux/actions/Action'


const Navbar = () => {
    const navigate = useNavigate()

    const getData = useSelector((state) => state.cartReducer.carts);

    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DELETE(id))
        navigate('/')
    }

    const total = () => {
        let price = 0;
        getData.map((e, k) => {
            price = e.price * e.qnty + price;
        })
        setPrice(price);
    }

    useEffect(() => {
        total()
    }, [total]);

    return (
        <div>
            <div className="navbar fixed shadow-md  z-50 w-full bg-[#E2A529]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to='/'>Home</Link></li>
                            <li> <Link to='/featureBurger'>Burger Items</Link></li>
                            <li> <Link to='/card'>Food Item</Link></li>
                            <li> <Link to='/chef'>Our chef</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Burger World</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to='/'>Home</Link></li>
                        <li> <Link to='/featureBurger'>Burger Items</Link></li>
                        <li> <Link to='/card'>Food Item</Link></li>
                        <li> <Link to='/chef'>Our chef</Link></li>
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
                                <Badge badgeContent={getData.length} color="success">
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
                            <span className='flex flex-row-reverse '>
                                <FontAwesomeIcon onClick={handleClose} className='h-[30px] w-[30px] text-[#000] mr-3 mb-1 ' icon={faXmark} />
                            </span>
                            {
                                getData.length ? <div>
                                    <table className='mx-10'>
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Resturent Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getData.map((e) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <NavLink onClick={handleClose} to={`/cardDetails/${e.id}`}>
                                                                        <img className='p-2 h-[140px] w-[220px]' src={e.imgdata} alt='cart' />
                                                                    </NavLink>
                                                                </td>
                                                                <td className='p-4'>
                                                                    <NavLink onClick={handleClose} to={`/cardDetails/${e.id}`}>
                                                                        <p> {e.rname}</p>
                                                                        <p><strong>Price:</strong> ${e.price}</p>
                                                                        <p><strong>Quantity: </strong>{e.qnty}</p>
                                                                    </NavLink>
                                                                    <p>
                                                                        <FontAwesomeIcon onClick={() => dlt(e.id)} className='h-[30px] w-[30px] text-[#FF0000]  mx-4 my-1 cursor-pointer' icon={faTrashCan} />
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <hr className='h-[3px] bg-[#E2A529] border-0 '></hr>
                                    <p className='text-center text-xl '> <strong> Total: ${price}</strong></p>
                                </div> :
                                    <div className='m-2' >
                                        <span className='flex ml-2'>
                                            <p className='p-4 text-lg text-[#000] font-semibold'>Your Cart is Empty</p>
                                            <img className='h-16 h-16 pr-2' src={cart} alt="Shoes" />
                                        </span>
                                    </div>}
                        </Menu>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Navbar;