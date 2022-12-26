import React from 'react';
import imgBG from './images/background.jpg';
import shef1 from './images/chef1.jfif';
import shef2 from './images/chef2.jfif';
import shef3 from './images/chef3.jfif';
import shef4 from './images/chef4.jpg';

const Chef = () => {
    return (
        <div className='pt-[68px]' style={{ backgroundImage: `url(${imgBG})` }}>
            <h4 className='text-xl'>Our Team</h4>
            <h2 className='text-4xl font-semibold text-[#6B3522]'>Our Master Chef</h2>

            <section class="flex mx-12">
                <div style={{ backgroundImage: `url(${imgBG})` }} className="mb-5 card w-80 bg-base-100 ">
                    <figure><img className='rounded-xl' src={shef1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${imgBG})` }} className=" m-5 card w-80 bg-base-100 ">
                    <figure><img className='rounded-xl' src={shef2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${imgBG})` }} className="m-5 card w-80 bg-base-100 ">
                    <figure><img className='rounded-xl' src={shef3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${imgBG})` }} className="m-5 card w-80 bg-base-100 ">
                    <figure><img className='rounded-xl' src={shef4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    );
};

export default Chef;