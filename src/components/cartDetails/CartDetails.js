import React, { useEffect, useState } from 'react';
import { faTrashCan, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE, REMOVE } from '../../redux/actions/Action'
import { ADD } from '../../redux/actions/Action';


const CartDetails = () => {

    const navigate = useNavigate()
    const { id } = useParams();
    const [data, setData] = useState([])
    const dispatch = useDispatch();

    const getData = useSelector((state) => state.cartReducer.carts);


    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id == id
        })
        setData(compareData);

    }

    useEffect(() => {
        compare()
    }, [id]);

    const send = (e) => {
        dispatch(ADD(e));
    }




    const dlt = (id) => {
        dispatch(DELETE(id))
        navigate('/')

    }
    const remove = (iteam) => {
        dispatch(REMOVE(iteam))

    }

    return (

        <div className='pt-[70px] '>

            <h3 className='text-4xl font-semibold text-[#6B3522] pb-2 '>Items Details Page</h3>



            {
                data.map((e) => {
                    return (
                        <>
                            <section className='grid grid-cols-2 gap-4  px-[200px] py-20'>
                                <div>
                                    <img className='h-[280px]' src={e.imgdata} alt=''></img>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-semibold text-[#000000] pb-2 '>Resturent: {e.rname}</h2>

                                    <div className='grid grid-cols-2 gap-4'>

                                        <div className='py-8 text-left text-base'>
                                            <p className='h-12'><strong>Price:</strong> ${e.price}</p>
                                            <p><strong>Dish:</strong> {e.address} </p>

                                        </div>
                                        <div className='py-8 text-left text-base'>
                                            <p><strong>Review:</strong> {e.somedata} </p>
                                            <p><strong>Rating:</strong> {e.rating}★</p>

                                        </div>

                                    </div>
                                    <h2><strong>Total: {e.price * e.qnty} </strong></h2>
                                    <div className='grid grid-cols-2 gap-4 py-2'>
                                        <div className="grid grid-cols-4 place-items-center">
                                            <span className=''>Quantity:</span>
                                            <FontAwesomeIcon onClick={() => send(e)} className='px-2 py-2 bg-slate-300' icon={faPlus} />
                                            <span className='text-2xl font-semibold px-2'>{e.qnty}</span>
                                            <FontAwesomeIcon onClick={e.qnty <= 1 ? () => { dlt(e.id) } : () => remove(e)} className='px-2 bg-slate-300 py-2' icon={faMinus} />



                                        </div>

                                        <div className="">

                                            <button onClick={() => { dlt(e.id) }} className='text-xl font-semibold text-[#b71540]  pointer'>Delete:
                                                <FontAwesomeIcon className='px-2' icon={faTrashCan} />

                                            </button>

                                        </div>
                                    </div>



                                </div>
                            </section>
                        </>
                    )
                })
            }






        </div>
    );
};

export default CartDetails;