import React from 'react'
import { useState } from 'react';
import { Links } from '../Data/data';
import Item from '../item/Item';
import './styles.scss';

const SideBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={open ? 'sidebarOpen' : 'sidebar'}>
            
            <svg className='hamburger' onClick={() => setOpen(!open)} viewBox="0 0 18 12">
                <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#8F8F8F"/>
            </svg>
            <div className='linksContainer'>
                {Links.map(({ text, to, svg })=> <Item key={text} open={open} to={to} text={text} svg={svg} ></Item> )}
            </div>
            
        </div>
    )
}

export default SideBar