import React, { useState, useEffect } from 'react';
import LiftCard from './LiftCard';

const LiftStatus = () => {

return (
    <>
        <div className='mx-2 md:flex items-center justify-between mb-4'>
            <h1 className="title">위험반경 내 작업자</h1>
            <div className='flex items-center font-bold text-sm'>
                <div className="circle bg-red m-2" />
                <div className="">매우 위험 (2m)</div>
                <div className="circle bg-orange m-2" />
                <div className="">위험 (4m)</div>
                <div className="circle bg-yellow m-2" />
                <div className="">주의 (6m)</div>
            </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 h-full">
            <LiftCard name="1번 (111111)" />
            <LiftCard name="1번 (111111)" />
            <LiftCard name="1번 (111111)" />
            <LiftCard name="1번 (111111)" />
        </div>
    </>
);
};

export default LiftStatus;
