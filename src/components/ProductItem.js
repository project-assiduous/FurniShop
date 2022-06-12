import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'

export default function ProductItem({ productName, currentPrice, oldPrice, img }) {
    return (
        <section className="relative w-[18rem] px-10 py-5 flex flex-col items-center">
            <div className="h-[20rem] bg-dark-green/10 w-full absolute top-0 left-0 right-0 -z-10" data-aos="fade-up"></div>
            <section data-aos="fade-up" data-aos-duration="1500" className="bg-brown hover:bg-[#e08f6a] hover:shadow-lg transition absolute -top-5 right-5 grid place-content-center h-10 w-10 rounded-full cursor-pointer">
                <RiShoppingCart2Line className="text-white" />
            </section>
            <section className="mt-5">
                <h1 className="font-medium text-xl" data-aos="fade-up" data-aos-duration="800">{productName}</h1>
                <section className="flex items-center space-x-7 py-3">
                    <p className="text-sm" data-aos="fade-up" data-aos-duration="900">${currentPrice}.00</p>
                    <p className="text-xs text-stone-500 line-through" data-aos="fade-up" data-aos-duration="1000">${oldPrice}.00</p>
                </section>
            </section>
            <figure className="w-[12rem] h-[18rem] mt-7" data-aos="fade-up" data-aos-duration="1500">
                <img className="w-full h-full object-cover object-center" src={img} alt={productName} />
            </figure>
        </section>
    )
}
