import React from 'react'
import AboutusItem from '../components/AboutusItem'

export default function Aboutus() {
    return (
        <div className="" id='About'>
            <div className="max-w-maxwidth mx-auto py-5">
                <section className="flex items-center justify-between">
                    <section className="w-[35rem]">
                        <h1 className="text-dark-green font-bold text-4xl font-notoserif" data-aos="fade-up">About Us</h1>
                        <p className="font-opensans mt-3" data-aos="fade-up" data-aos-duration="700">
                            At Besnik Consultancy, we take pride in our values <br />
                            - service, integrity, and excellence.
                        </p>
                    </section>
                    <button data-aos="fade-up" data-aos-duration="1000" className="bg-dark-green/10 py-2 px-5 font-semibold transition shadow-lg hover:shadow-xl rounded-sm hover:text-dark-green">Learn more</button>
                </section>

                {/* what we do section */}

                <div className="mt-8 flex justify-between items-start font-opensans mb-3">
                    <section className="grid grid-cols-2 gap-20">
                        <section data-aos="fade-up" data-aos-duration="1000">
                            <AboutusItem
                                No="1."
                                title="Who We Are"
                                description={
                                    <span>
                                        You get a 2-week free trial to kick the <br />
                                        Smarty tries. We want you to.
                                    </span>
                                } />
                        </section>
                        <section data-aos="fade-up" data-aos-duration="1400">
                            <AboutusItem
                                No="2."
                                title="What Do We Do"
                                description={
                                    <span>
                                        We give you a free course that guides<br />
                                        you through the process.
                                    </span>
                                } />
                        </section>
                        <section data-aos="fade-up" data-aos-duration="1800">
                            <AboutusItem
                                No="3."
                                title="How Do We Help"
                                description={
                                    <span>
                                        Use our multimedia lecturer, videos<br />
                                        and coaching sessions.
                                    </span>
                                } />
                        </section>
                        <section data-aos="fade-up" data-aos-duration="2000">
                            <AboutusItem
                                No="4."
                                title="Create success story"
                                description={
                                    <span>
                                        With access to online learning<br />
                                        resources anyone can transform.
                                    </span>
                                } />
                        </section>
                    </section>
                    <section className="columns-2 gap-5">
                        <figure className="w-[15rem] mt-12" data-aos="fade-up" data-aos-duration="1000">
                            <img className="w-full" src="https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Furniture" />
                        </figure>
                        <figure className="w-[15rem] mt-3" data-aos="fade-up" data-aos-duration="1400">
                            <img className="w-full" src="https://images.unsplash.com/photo-1616627434852-097e535878d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Furniture" />
                        </figure>
                        <figure className="w-[15rem]" data-aos="fade-up" data-aos-duration="1800">
                            <img className="w-full" src="https://images.unsplash.com/photo-1632392674310-3e695effcca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3IlMjBkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Furniture" />
                        </figure>
                        <figure className="w-[15rem] mt-3" data-aos="fade-up" data-aos-duration="2000">
                            <img className="w-full" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ25lcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="Furniture" />
                        </figure>
                    </section>
                </div>
            </div>
        </div>
    )
}
