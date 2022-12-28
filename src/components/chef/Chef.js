import React from 'react';
import imgBG from '../assets/background.jpg';
import shef1 from '../assets/chef1.jfif';
import shef2 from '../assets/chef2.jfif';
import shef3 from '../assets/chef3.jfif';

const Chef = () => {
    return (
        <div className='pt-[68px]' style={{ backgroundImage: `url(${imgBG})` }}>
            <h4 className='text-xl'>Our Team</h4>
            <h2 className='text-4xl font-semibold text-[#6B3522]'>Our Master Chef</h2>

            <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-0 lg:mx-12">
                <div style={{ backgroundImage: `url(${imgBG})` }} className="mb-5 card w-screen lg:w-96 bg-base-100 ">
                    <figure><img className='rounded-xl' src={shef1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Bobby Flay
                        </h2>
                        <p>Develop and plan menus and daily specials. Ensure applicable health codes.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Saucier</div>
                            <div className="badge badge-outline">Rotisseur</div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${imgBG})` }} className=" m-0 lg:m-5 card w-screen lg:w-96 bg-base-100 ">
                    <figure><img className='rounded-xl' src={shef2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Wolfgang Puck
                        </h2>
                        <p>Making recipes, setting up menus and preparing high-quality dishes</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Patissier</div>
                            <div className="badge badge-outline">Entremetier</div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${imgBG})` }} className="m-0 lg:m-5 card w-screen lg:w-96 bg-base-100 ">
                    <figure><img className='rounded-xl ' src={shef3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Anthony Bourdain
                        </h2>
                        <p>Responsible for any foods that must be grilled. </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Leicester</div>
                            <div className="badge badge-outline">Poissonier</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chef;