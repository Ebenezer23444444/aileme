import React from 'react'
import { PiSlideshowThin } from 'react-icons/pi'
import Slider from 'react-slick'
// import lukas from 'Images/353.jpg'
// import container from '../../public/Images/24.png'

function Home() {
    const data=[
        {
        Images:'/Images/39.png',
    },
    {
        Images:'/Images/26.jpg',
    },{
    
        Images:'/Images/27.jpg',
    },
    ]
    let eben = {
        dots: true,
        infinite:true,
        speed:600,
        slidesToShow:1,
        slideToscroll:1,
    }
  return (
    <div className=' h-[30em] bg-slate-200 pt-10 m-20'>
        <div className='[h-330px] w-[85%] m-auto sm:flex-row'>
            <Slider {...eben}>
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.Images} className=" sm:flex-row h-[20em] w-[60%]" />

                            </div>
                        )
                    })
                }
            </Slider>
            
                      
         
        </div>
    </div>
    // npm jsx.com
  )
}

export default Home
