import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

function Choose() {
  return (
    <div className='ann'>
        <div className='anni'>
            <h1> why you choose us</h1>
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Nesciunt, necessitatibus!

            <div>
                <FaShoppingBag/>
                {/* <h5 className='tt1'>hhh</h5> */}
                <p> Lorem ipsum dolor sit amet consectetur <br />adipisicing.
                </p>

                <div className='shopbag'>
                <FaShoppingBag/><br />
                    {/* <h5 className='tt'>pp</h5> */}
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Aliquam, perferendis.
                </div>
            </div>
            <div className='sho'>
            <FaShoppingBag/>
            {/* <h5 className='tt'>gggg</h5> */}
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Sapiente, ullam.
                </p>
                <div className='shopbag'>
                <FaShoppingBag/>
                    {/* <h5 className='tt'>gg</h5> */}
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Aliquam, perferendis.
                </div>

                 <img src="./Images/006.jpg" alt="" />                


            </div>
           

        </div>
      
    </div>
  )
}

export default Choose
