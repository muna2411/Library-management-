

import {  useRef } from 'react';
import { useLocation } from 'react-router-dom';
import generatePDF from 'react-to-pdf';

const Pdf = () => {
    const location = useLocation();
    const description = new URLSearchParams(location.search).get("description");
    const image = new URLSearchParams(location.search).get("image");
    const name = new URLSearchParams(location.search).get("name");
    const targetRef = useRef();
   
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/0jys7pR/b7.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
       
     <div className='lg:flex justify-around items-center sm:flex-col-1'>
     <div  className='flex justify-around items-center '>
     <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-[50px] sm:mx-[0px]">
  <figure><img className='h-[500px] w-[300px]' src={image} alt="Album"/></figure>
  <div ref={targetRef} className="card-body w-[600px]">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
  <div className="card-actions justify-end">
    <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})} className='btn bg-[#A0522D] text-white mt-[400px] mr-[20px]'>Download PDF</button>
    </div>
    </div>
</div>
<div>
    <img className='w-[500px] h-[870px]' src='https://i.ibb.co/MnkxhV7/l2.jpg'></img>
</div>
     
        </div>
        {/* <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})} className='btn'>Download PDF</button> */}
     </div>
    );
};

export default Pdf;

// <img className='w-[400px] h-[500px]' src={image}></img>
//           <p className='w-[600px] h-[500px]'>{description}</p>