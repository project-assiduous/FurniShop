import React from 'react'
// import { GiPayMoney } from "react-icons/gi"

export default function HotdealItem({ dealIcon, dealTitle, dealDescription }) {
    return (
        <div className="flex flex-col space-y-2">
            <section className="text-4xl">
                {dealIcon}
            </section>
            <h1 className="font-semibold text-lg">{dealTitle}</h1>
            <p>{dealDescription}</p>
        </div>
    )
}
