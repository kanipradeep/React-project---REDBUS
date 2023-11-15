import React from 'react';
import EastIcon from '@mui/icons-material/East';
import "./About.css"
const About = () => {
  return (
   <section className='about-sec'>
    <div className="about-container">
     <div className='about-row'>
         <div className="about-col1">
          <div className="about-col">
               <h1>NOW,<span className="bold"> GET MORE THAN JUST BUS </span>TICKETS WITH REDBUS!</h1>

          </div>

         <div className="travel-detail">
              <div className="travel1">
                <div className='about-cab1'>
                     <img src="https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde.svg" alt="iamge"/>
                 </div>
                  <div className="cab-head1">
                           <h5>Cab/Bus Rental</h5>
                  </div>
              </div>
                 <div className="line">
                    <div className='small-line'>
                        </div>
                 </div>
               
              <div className="travel">
                <div className='about-cab'>
                     <img src="https://s1.rdbuz.com/web/images/homeV2/AboutUs/redRail.svg" alt="iamge"/>
                 </div>
                  <div className="about-head">
                           <h5>Train Tickets</h5>
                  </div>
              </div>
              
         </div>
                  

          <div className="about-para">
            <p>Rent Cabs, Tempo Travellers & Buses with best drivers</p>
         
           <div className="car-detail">
               <div className="car-img">
                    <img src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg" alt=""/>
               </div>
                <div className='car-word'>
                   <h5>Outstation</h5>
                </div>
           </div>

           <div className="car-detail">
               <div className="car-img">
                    <img src="https://s1.rdbuz.com/web/images/homeV2/AboutUs/ryde_car_hourly.svg" alt=""/>
               </div>
                <div className='car-word'>
                   <h5>Hourly Rental</h5>
                </div>
           </div>


           <div className="car-detail">
               <div className="car-img">
                    <img src="https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde_airport_transport.svg" alt=""/>
               </div>
                <div className='car-word'>
                   <h5>Airport Transfers</h5>
                </div>
           </div>

            <div className="button">
                <div className="book">
                     <span>Bookcab/Bus Rental<EastIcon className="east" /></span>
                </div>
                
             </div>
          </div>

          </div>
    <div className="car-2">
        <div className="cars-travel">
             <img className="filter"src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg"/>
         </div>
    </div>


     </div>
    </div>
</section>
  );
}

export default About;