import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './Travel.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FlareIcon from '@mui/icons-material/Flare';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import WifiIcon from '@mui/icons-material/Wifi';
import CableIcon from '@mui/icons-material/Cable';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VideocamIcon from '@mui/icons-material/Videocam';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function Travel() {
  const [booking] = useSearchParams()

  var count = booking.get('info');
  console.log(count);

  var navi = useNavigate();
  var view = () => {
    navi("/Seat");
  }
  let param = JSON.parse(count);
  console.log(param);
  return (
    <div>
      <section className="buseslist-sec"> 
        <div className="buseslist-container"> 
          <div className="buses-list1"> 

            <div className="sec1-buslist"> 

              <div className="filter"> 
                <h5> FILTERS </h5> 
                  <hr className="brake"/>  
                <h4> <TrendingUpIcon id="tren"/> Live Tracking </h4> 
                <hr className="brake"/>            
              </div>

              <div className="depart"> 
                <h5> DEPARTURE TIME </h5>

                  <div className="depart-time"> 
                    <input type="checkbox" disabled/>
                    &nbsp;
                    <WbTwilightIcon/> &nbsp;
                    <span className="avble-time"> Before 6 am </span>
                  </div>

                  <div className="depart-time"> 
                    <input type="checkbox" disabled/>
                    &nbsp;
                    <WbSunnyIcon/> 
                    &nbsp;
                    <span className="avble-time"> 6 am to 12 pm </span>
                  </div>

                  <div className="depart-time"> 
                    <input type="checkbox" disabled/>
                    &nbsp;
                    <FlareIcon/> 
                    &nbsp;
                    <span className="avble-time"> 12 pm to 6 pm </span>
                  </div>

                  <div className="depart-time"> 
                    <input type="checkbox" disabled/>
                    &nbsp;
                    <SettingsBrightnessIcon/> 
                    &nbsp;
                    <span className="av-time"> After 6 pm </span>
                  </div>
              </div>
                    <hr className="brake"/>
            
              <div className="sec2-bustype"> 
                  <h5> BUS TYPES </h5>

                  <div className="bus-type"> 
                    <input type="checkbox"/>
                    &nbsp;
                    <span className="coach"> SEATER </span>
                 </div>

                  <div className="bus-type"> 
                    <input type="checkbox"/>
                    &nbsp;
                    <span className="coach"> SLEEPER </span>
                 </div>

                 <div className="bus-type"> 
                    <input type="checkbox"/>
                    &nbsp;
                    <span className="coach"> AC </span>
                 </div>

                 <div className="bus-type"> 
                    <input type="checkbox"/>
                    &nbsp;
                    <span className="coach">NON-AC </span>
                 </div>
              </div>

                  <hr className="brake"/>

                 <div className="sec3-facilities">
                    <h5> AMENITIES </h5>

                    <div className="amenities">
                    <WifiIcon id="am"/> &nbsp;
                    <span className="a-icon"> WIFI </span>  
                    </div>  

                    <div className="amenities">
                    <CableIcon id="am"/> &nbsp;
                    <span className="a-icon"> Charging Point </span>  
                    </div> 

                    <div className="amenities">
                    <AirlineSeatIndividualSuiteIcon id="am"/> &nbsp;
                    <span className="a-icon"> Blankets </span>  
                    </div>

                    <div className="amenities">
                    <LocalCafeIcon id="am"/> &nbsp;
                    <span className="a-icon"> Tea/Coffee </span>  
                    </div>

                    <div className="amenities">
                    <PhoneAndroidIcon id="am"/> &nbsp;
                    <span className="a-icon"> Emergency Number </span>  
                    </div>
                  </div>
            </div>
          
           
            
            
            <div className="buses-list2"> 
             <div className="head-list">
                <span className="short"> 5 Buses </span>
                <span className="sort"> SORT BY: </span>
                <span className="time1"> Departure </span>
                <span className="time2"> Arrival </span>
                <span className="time3"> Ratings </span>
                <span className="time4"> Fare </span>
              </div>
              {param.buses.map((a,b)=>{
                return <div className="row1" key={b}>
                  <div className="list1"> 
                    <div className="area1">
                      <div className="logo-image"> 
                        <img src="https://www.redbus.in/images/reviews/primo_logo.svg" alt="red-bus"/>
                      </div>
                         <h4> {a.busname} </h4>
                         <h4> {a.bustype} </h4>

                        <div className="facility-details"> 
                        <Tooltip title="TV">
                        <IconButton>
                          <LiveTvIcon id="facility-icon" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="USB device">
                        <IconButton>
                          <CableIcon id="facility-icon" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="WIFI">
                        <IconButton>
                          <WifiIcon id="facility-icon" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="CcTv">
                        <IconButton>
                          <VideocamIcon id="facility-icon" />
                        </IconButton>
                      </Tooltip>

                       </div>
                    </div>

                  
                    <div className="starting"> 
                        <div className="starttime"> {a.starttime} </div>
                        <div className="startplace"> {a.startplace} </div>
                    </div> 

                    <div className="ending"> 
                      <div className="endtime"> {a.endtime} </div>
                      <div className="endplace"> {a.endplace} </div>
                    </div>
                    
                    <div className="rating"> 
                    <div> <StarHalfIcon id="star" /> {a.rating} </div>
                    </div>
                  
                    
                    <div className="amount"> {a.rate} </div>
                  
                  
                    <button className="seat" onClick={view}> View Seat </button>
                  
                  </div>
                  </div>
                  
                   
                  })}     
              </div> 
          
        </div>
        </div>
      </section>
    </div>
  )
}

export default Travel

                  
                     
              
              
            


         