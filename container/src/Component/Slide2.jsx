import React from 'react'
import { PiSlideshowThin} from 'react-icons/pi'
import Slider from 'react-slick'

function Slide2() {
    const data=[
        
        {
            Images:'/Images/23.jpg',
        },
        {
            Images:'/Images/26.jpg',
        },
        {
            Images:'/Images/27.jpg',
        },
        {
            Images:'/Images/28.jpg',
        },
        {
            Images:'/Images/29.jpg',
        },
        {
            Images:'/Images/30.jpg',
        },
        {
            Images:'/Images/31.jpg',
        },
        {
            Images:'/Images/32.jpg',
        },
        {
        
            Images:'/Images/33.jpg',
        },
        {
        
            Images:'/Images/33.jpg',
        },
        {
        
            Images:'/Images/33.jpg',
        },
    ]
    let anita = {
        dots:true,
        infinite:true,
        speed:600,
        slidesToShow:9,
        slideToscroll:1,
    }
  return (
    <div className=' h[-30em] bg-slate-200 pt-10 m-20'>
        <div className= '[h-330px] w-[85%] m-auto sm:flex-row'>
            <Slider {...anita}>
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.Images} className="sm:flex-row h-[8em] w-[75%] gap-9" alt="" />

                            </div>

                        )
                    })
                }  
                
            </Slider>

        </div>
        
        
      
    </div>
   
  )
}

export default Slide2
