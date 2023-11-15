import React from 'react'
import "../Header/Header.css"
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = () => {
  return (
  
    <section className="header">  
      
        <div className="header-container">
            <div className="header-row">

                <div className="head">
                    <div className="red-bus"> 
                        <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redbus"/>
                    </div>
                </div>
                <div className="booking"> 
                    <div className="tickets"> 
                       <div className="link"> <img src="https://st.redbus.in/web/images/layout/rb_vertical.svg" alt="bus"/>
                       </div>
                        <h6 > Bus Tickets </h6>
                          
                    </div>  

                    <div className="tickets">    
                     <div className="link"> <img src="https://st.redbus.in/web/images/layout/ryde_vertical.svg" alt="bus"/>
                     </div> 
                        <h6> Cap Rental </h6>
                     
                    </div> 

                    <div className="tickets">
                     <div className="link"> <img src="https://st.redbus.in/web/images/layout/rail_vertical.svg" alt="bus"/>
                     </div> 
                        <h6 > Train Tickets </h6>
                    
                    </div> 
                    </div>    
                    <div className="header-end"> 

                    <div className="account">
                         <div className="icon1"><HeadsetMicIcon className="headset"/> </div>
                            <div className="para1"><p> Help </p> </div>
                    </div>
                    
                    <div className="account"> 
                      
                        <div  className="icon1"><AccountCircleIcon className="headset"/> </div>
                        <div className="para1"> <p> Account </p> </div>                   
                    
                    </div>
                   </div>
                    
          </div>  
         </div>
        
      
      </section>
    
  )
}

export default Header
