import React from 'react';
import Header from './components/Header';
import LiftStatus from './components/LiftStatus';
import WorkerStatus from './components/WorkerStatus';


function App() {
  return (
    <div className='bg-light-gray'>
      <Header />
        <div className='md:h-[80vh] md:flex m-6 gap-6'>
          <div className='md:w-3/4'>
            <LiftStatus />
          </div>
          <div className='md:w-1/4 md:mt-0 mt-8 h-full'>
            <WorkerStatus />
          </div>
      </div>
    </div>
  );
}

export default App;
