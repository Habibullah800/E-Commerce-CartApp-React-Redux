import React from 'react';

import burger1 from './feature-1.png';
import burger2 from './feature-2.png';
import burger3 from './Feature-3.png';
import burger4 from './Feature-4.png';
import burger5 from './Feature-5.png';
import burger6 from './Feature-6.jpg';
import burger7 from './Feature-7.png';
import burger8 from './Feature-8.jfif';
import burger9 from './Feature-9.png';
import imgBG from './chef.jpg';


const FeatureBurger = () => {
    return (
        <section className='mb-16 mt-0 mx-12 pt-[66px] ' style={{ backgroundImage: `url(${imgBG})` }}>
            <h3 className='text-4xl font-semibold text-[#6B3522] pb-2 '>Feature Burger Items</h3>


            <div className='grid grid-cols-3 gap-6'>



                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg h-[200px] w-[250px]' src={burger1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>

                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg h-[200px] w-[200px]' src={burger2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg  h-[200px] w-[240px]' src={burger9} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg h-[200px] w-[200px]' src={burger4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg h-[200px] w-[215px]' src={burger5} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg h-[200px] w-[250px]' src={burger6} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg py-[15px] h-[200px] w-[240px]' src={burger7} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg h-[200px] w-[200px]' src={burger8} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${imgBG})` }} className="card w-96 bg-base-100 ">
                        <figure><img className='rounded-lg py-[18px] h-[200px] w-[280px]' src={burger3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he</p>
                            <span className='card-actions justify-end pr-8'>
                                <h2 className="badge badge-outline mb-4 ">Price: $</h2>
                            </span>
                            <button className="btn text-[#000] bg-[#F8EFBA] hover:bg-[#E2A529] border-[#EAB543]">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureBurger;