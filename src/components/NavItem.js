import React from 'react'

export default function NavItem({ page, itemTitle }) {
    return (
        <li>
            <a href={page} className="hover:text-dark-green">{itemTitle}</a>
        </li>
    )
}
