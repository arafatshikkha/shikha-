
"use client"
import React,{useState} from 'react'
import './tcard.css';
import StarRating from 'react-star-rating-component';
import Quart from '../assets/quote.png'
import Image from 'next/image';
function TCard() {
  return (
    <div className='card-wapper'>
      <StarRating 
        name="rate1"
        value={3} 
        starCount={5}
        starColor={'#ffb400'}
        emptyStarColor={'#ccc'}
        />
        <p className='tcard-font'>
        Lorem ipsum dolor sit amet conse
        Turpis lorem mauris elementum vi egestas ipsum cras fermentum. Et tincidunt tellus lobortis fermentu
        Cursus at eget augue nunc. Nisim habitasse est vitae mattis aliqua 
        turpis egestas impe.
        </p>
        <h3 className='t-head'>Course Name</h3>
        <div className='flex items-center justify-between'>
            <div className='flex items-center mt-3'>
                <div className='img-t'></div>
                <div className='ml-2'>
                    <h3 className='t-head'>Steve McQuillen</h3>
                    <p className='t-tag'>Student</p>
                </div>
            </div>
            <div>
                <Image src={Quart} alt="" width={66} height={66}/>
            </div>
        </div>
    </div>
  )
}

export default TCard;
