import React from 'react';
import feature from '../assets/FeatureBurger-2.png';



const Feature = () => {
    return (
        <div className='bg-[#F8EFBA] flex my-4'>
            <div className="card w-full bg-[#F8EFBA] ">
                <div>
                    <img class="mx-auto my-4 w-[450px] h-[250px]" src={feature} alt='bann' />
                </div>

            </div>
            <div className="card w-full bg-[#F8EFBA] ">

                <div className="card-body">
                    <h2 className="card-title m-auto">
                        Welcome To Burger-world
                        <div className="badge badge-secondary">Feature</div>
                    </h2>
                    <p className='m-auto font-medium'>Here at Burger world, we know what goes into our food. From our house mayo and special dipping sauces, to our hand-cut, twice fried french fries, we’re all about quality ingredients. Our patties are no exception. Freshly ground Angus beef, made from a proprietary blend of cuts. We tested numerous versions to bring you flavorful, juicy meat that is sure to satisfy. Thanks for joining with us</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Hot Deals</div>
                        <div className="badge badge-outline">20% Off</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;