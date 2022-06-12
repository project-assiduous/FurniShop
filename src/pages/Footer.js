import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import FooterData from '../data/FooterData.json'

export default function Footer() {
    return (
        <footer className="bg-dark-green py-20 font-opensans">
            <section className="max-w-maxwidth mx-auto px-10">
                <section className="flex items-center justify-between">
                    <h1 className="text-2xl text-white font-semibold">
                        Start your business today for <br />
                        $0+ state fees.
                    </h1>
                    <section className='flex items-center space-x-5'>
                        <button className='bg-white rounded-full px-10 py-2'>Get Started</button>
                        <button className='bg-[#3A5F5F] rounded-full px-10 py-2 text-white'>Contact Sales</button>
                    </section>
                </section>

                <section className="w-full h-[2px] bg-gray-400/10 my-12"></section>

                <section className="flex items-start text-white justify-between">
                    <div className="mr-40">
                        <h1 className="font-notoserif text-lg font-semibold">furni.shop</h1>
                        <p className="mt-7 text-sm font-[300]">
                            Optix seamlessly connects your <br />
                            members with the community, <br />
                            resources.
                        </p>
                        <section className="flex items-center space-x-7 mt-7">
                            <FaFacebookF className="hover:text-gray-400/80 transition cursor-pointer" />
                            <BsTwitter className="hover:text-gray-400/80 transition cursor-pointer" />
                            <FaLinkedinIn className="hover:text-gray-400/80 transition cursor-pointer" />
                            <BsPinterest className="hover:text-gray-400/80 transition cursor-pointer" />
                        </section>
                    </div>

                    <section className="flex items-start justify-between space-x-10 flex-1 mr-12">
                        {
                            FooterData && FooterData.map(data => {
                                return (
                                    <section key={data.id}>
                                        <h1 className="font-semibold">{data.title}</h1>
                                        {
                                            data && data.items.map(dataitem => {
                                                return (
                                                    <ul key={dataitem.id} className="text-sm font-[300] space-y-3 mt-3">
                                                        <li><a href="/#" className="hover:underline">{dataitem.item}</a></li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </section>
                                )
                            })
                        }
                    </section>
                </section>
            </section>
        </footer>
    )
}
