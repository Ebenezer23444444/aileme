import React from 'react'
import { PiSlideshowThin } from 'react-icons/pi'
import Slider from 'react-slick'

function Slide3() {
        const data=[
            
            {
                Images:'/Images/36.jpg',
            },
            {
                Images:'/Images/37.jpg',
            },
            {
                Images:'/Images/38.jpg',
            },{
            
                Images:'/Images/35.jpg',
            },
            
        ]
        let anib = {
            dots:true,
            infinite:true,
            speed:600,
            slidesToShow:2,
            slideToscroll:1,
        }
  return (
    <div className=' h[-30em] bg-slate-200 pt-10 m-20'>
    <div className= '[h-330px] w-[85%] m-auto sm:flex-row'>
        <p className=' flex justify-center font-semibold'> 
            <h2 className=''> Deals of the day</h2>
        </p>
        <Slider {...anib}>
            {
                data.map((item,index)=>{
                    return(
                        <div key={index}>
                            <img src={item.Images} className="sm:flex-row h-[8em] w-[47%] gap-10" alt="" />

                        </div>

                    )
                })
            }  
            
        </Slider>

    </div>
    
    
  
</div>
  )
}

export default Slide3

