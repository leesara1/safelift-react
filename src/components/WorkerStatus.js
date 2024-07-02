import React, { useState, useEffect } from 'react';

const WorkerStatus = ({list}) => {
  list=['관리자', '관리자', '관리자', '관리자', '관리자', '관리자', '관리자', '관리자', '관리자', '관리자', '관리자', '관리자', '관리자', '관리자'];

  return (
    <>
        <div className='mx-2 flex items-center mb-4'>
            <h1 className="title">현재 작업자</h1>
        </div>
        <div className='card p-6 md:h-full'>
          {list && list.map((item, index) => (
            <div className='text-lg font-bold' key={index}>{item}</div>
          ))}
        </div>
    </>
  );
};

export default WorkerStatus;
