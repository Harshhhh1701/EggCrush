import React from 'react'
import fimage from '../images/egg.jpg'
import simage from '../images/egg-2.jpg'
const Content = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={fimage} alt="" className="h-full rounded mb-20 shadow" />
                <div className='flex flex-col justify-center items-center'>
                    <h2 className="text-2xl mb-2">Egg Muffins</h2>
                    <p className="mb-2">Crispy,delicious and nutritious</p>
                    <span>RS 120</span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={simage} alt="" className="h-full rounded mb-20 shadow" />
                <div className='flex flex-col justify-center items-center'>
                    <h2 className="text-2xl mb-2">Egg Salad</h2>
                    <p className="mb-2">Crispy,delicious and Healthy</p>
                    <span>RS 100</span>
                </div>
            </div>
        </>
    )
}

export default Content