import React, { useState } from 'react';
import type { NextPage } from "next";
import Navbar from '../components/navbar';
import Details from '../components/details';
import Project from '../components/project';


const Dashboard: NextPage = () => {
  return (
    <div className="relative bg-white w-screen text-left text-lg text-gray-1200 font-gt-walsheim">
      <div className='flex flex-row w-screen'>
        <Navbar />
        <Details />
        <Project />

      </div>
      
    </div>
  );
};

export default Dashboard;
