import { BsArrowRight } from "react-icons/bs"
import ProductCategoryItem from '../components/ProductCategoryItem'
import ProductItem from '../components/ProductItem'
import ProductData from '../data/Product.json'
import { useState, useEffect, useMemo } from 'react'

export default function Products() {
    const [productList, setProductList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()

    useEffect(() => {
        setProductList(ProductData)
    }, [])

    // Function to get filtered list
    function getFilteredProductList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory) {
            return productList;
        }
        return productList.filter((item) => item.category === selectedCategory);
    }

    // Avoid duplicate function calls with useMemo
    useMemo(getFilteredProductList, [selectedCategory, productList]);

    function handleCategoryChange(btnName) {
        setSelectedCategory(btnName);
    }

    return (
        <div className="font-opensans">
            <section className="max-w-maxwidth mx-auto px-20 py-7">
                <div className="flex justify-between items-center">
                    <section className="w-[35rem]">
                        <h1 className="text-dark-green font-bold text-4xl font-notoserif" data-aos="fade-up">Products</h1>
                    </section>

                    <section className="flex items-center justify-between space-x-4">
                        <a href="/#" data-aos="fade-up" data-aos-duration="1000">See all</a>
                        <div className="relative" data-aos="fade-up" data-aos-duration="1500">
                            <BsArrowRight />
                            <section className="bg-dark-green/10 w-6 h-3 absolute top-[2px] left-1"></section>
                        </div>
                    </section>
                </div>

                {/* Categories */}
                <section className="items-center flex space-x-14 w-full justify-center text-center mt-7">
                    <section data-aos="fade-up" data-aos-duration="800">
                        <ProductCategoryItem title="All" onClick={() => { handleCategoryChange('') }} />
                    </section>
                    <section data-aos="fade-up" data-aos-duration="1000">
                        <ProductCategoryItem title="Bed" onClick={() => { handleCategoryChange('Bed') }} />
                    </section>
                    <section data-aos="fade-up" data-aos-duration="1200">
                        <ProductCategoryItem title="Sofa" onClick={() => { handleCategoryChange('Sofa') }} />
                    </section>
                    <section data-aos="fade-up" data-aos-duration="1400">
                        <ProductCategoryItem title="Chair" onClick={() => { handleCategoryChange('Chair') }} />
                    </section>
                    <section data-aos="fade-up" data-aos-duration="1600">
                        <ProductCategoryItem title="Light" onClick={() => { handleCategoryChange('Light') }} />
                    </section>
                </section>

                <section className="mt-16 grid grid-cols-3 place-items-center">
                    {
                        productList && productList.map(product => {
                            // return console.log(product.name);
                            return product.prices.map(price => {
                                return <ProductItem key={product.id}
                                    productName={product.name}
                                    currentPrice={price.currentPrice}
                                    oldPrice={price.oldPrice}
                                    img={product.imgUrl}
                                />
                            })
                        })
                    }
                </section>
            </section>
        </div>
    )
}
