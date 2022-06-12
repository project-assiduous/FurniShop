import React from 'react'

export default function ProductCategoryItem({ title }) {
    return (
        <button className="text-sm text-dark-green/50 hover:text-black transition">{title}</button>
    )
}
