import React from 'react'

export default function AboutusItem({ No, title, description }) {
    return (
        <section>
            <h1 className="font-bold text-dark-green text-3xl">{No}</h1>
            <h2 className="font-bold text-lg text-dark-green mt-4">{title}</h2>
            <p className="mt-4">
                {description}
            </p>
        </section>
    )
}
