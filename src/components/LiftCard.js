import React, { useState, useEffect } from 'react';
import Forklift from '../assets/forklift.svg';

const LiftCard = ({ name, data }) => {
    data = [
        { name: '관리자', color:'red'},
        { name: '관리자', color:'red'},
        { name: '관리자', color:'orange'},
        { name: '관리자', color:'yellow'},
        { name: '관리자', color:'yellow'},
        { name: '관리자', color:'yellow'},
        { name: '관리자', color:'yellow'},
        { name: '관리자', color:'yellow'},
        { name: '관리자', color:'yellow'},
    ];

    return (
        <div className='card md:flex pl-6 mb-6'>
            <div className='flex md:flex-col items-center md:justify-center w-24 md:w-1/3'>
                <img className='mr-4' src={Forklift}/>
                <div className='font-bold'>{name}</div>
            </div>
            <div className='flex flex-col items-center md:justify-center md:w-2/3'>
                {data && data.map((item, index) => (
                    <div className='text-lg font-bold' style={{ color: item.color }} key={index}>{item.name}</div>
                ))}
            </div>
        </div>
    );
};

export default LiftCard;
