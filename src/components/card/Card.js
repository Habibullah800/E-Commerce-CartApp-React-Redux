import React, { useState } from 'react';
import imgBG from '../assets/background.jpg';
import Cardsdata from '../../Data';
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/actions/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {

    const [data, setData] = useState(Cardsdata);

    const dispatch = useDispatch()

    const send = (e) => {
        dispatch(ADD(e));
    }
    return (
        <div className='pt-[66px]'>
            <h2 className='text-4xl font-semibold text-[#6B3522] pb-2 '>Our Extra Food Items</h2>

            <div className='grid grid-cols-3 gap-6 mx-12' >

                {
                    data.map((element, id) => {
                        return (
                            <div >
                                <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                                    <figure><img className='rounded py-[18px] h-[200px] w-[280px]' src={element.imgdata} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title mx-auto">
                                            {element.rname}
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p>Address: {element.address}</p>
                                        <span className='card-actions justify-end pr-8'>
                                            <h2 className="badge badge-outline mb-4 ">Price: $ {element.price}</h2>
                                            <h2 className="badge badge-outline mb-4 ">Rating: {element.rating} ★</h2>
                                        </span>
                                        <button
                                            onClick={() => {
                                                toast("Food is added to Cart! Thanks.");
                                                send(element);
                                            }}

                                            className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Card;