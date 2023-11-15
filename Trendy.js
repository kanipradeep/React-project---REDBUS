import React, { Component } from 'react'
import "./Trendy.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay:false,
    };
    var trendy = [{
      img: "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
      name: "BUS",
      para: "Save up to Rs 250 on bus tickets",
      date: "Valid till 31 Aug",
      stage: "FIRST",
      icon: <ContentCopyIcon/>,

    },

    {
      img: "https://st.redbus.in/images/offers/superhit_rav/2_1.png",
      name: "BUS",
      para: "Save up to Rs 300 in AP,TS routes",
      date: "Valid till 31 Aug",
      stage: "SUPERHIT",
      icon: <ContentCopyIcon/>,

    },

    {
      img: "https://st.redbus.in/Images/INDOFFER/BUS200/80x80.png",
      name: "BUS",
      para: "Save up to Rs 200 in Gujarat and MP routes",
      date: "Valid till 31 Aug",
      stage: "BUS200",
      icon: <ContentCopyIcon/>,

    },

    {
      img: "https://st.redbus.in/Images/INDOFFER/RB200/80x80.png",
      name: "BUS",
      para: "Save up to Rs 200 in Delhi and Rajasthan",
      date: "Valid till 31 Aug",
      stage: "RB200",
      icon: <ContentCopyIcon/>,

    },

    {
      img: "https://st.redbus.in/Images/APSRTC/new/APSRTC_3.png",
      name: "BUS",
      para: "Save up to Rs 250 on bus tickets ",
      date: "Valid till 31 Aug",
      stage: "APSRTCNEW",
      icon: <ContentCopyIcon/>,

    },

    {
      img: "https://st.redbus.in/Images/TSRTC/80x80.png",
      name: "BUS",
      para: "Save up to Rs 250 on TSRTC bus tickets ",
      date: "Valid till 31 Aug",
      stage: "TSRTC",
      icon: <ContentCopyIcon/>,

    }
    ];

    return (
      <section className="trendy-sec"> 
      <div className="trendy-container">
        
        <div className="trendy-heading">
              <h2> TRENDING OFFERS </h2>
        </div>      
        <Slider {...settings}>
          
        {trendy.map((a,b)=>{
              return (
              <div className="trend">
              <div className="boxes" id={b}> 
              <div className="card-image"> <img src={a.img}/> </div> 

              <div className="card-content">
                <h6> {a.name} </h6>
                <p> {a.para} </p>
                <h5> {a.date} </h5>
              
              <div className="card-stage"> 
                <h3> {a.stage} </h3>
                <h4> {a.icon} </h4>
              </div>
              </div>
              </div>
              </div>
             ) 
            })}

        </Slider>
        
      </div>      
      
      </section>
      
    );
  }
}
//     return (
//       <section className="trendy-sec">
//         <div className="trendy-container">
//           <div className="trendy-heading">
//             <h2> TRENDING OFFERS </h2>
//           </div>
//           <Slider {...settings}>
//             {trendy.map((a,b)=>{
//               return <div  key={b}> 
//               <div> <img src={a.img}/> </div> 
//               <div><h6> {a.name} </h6> </div>
//               <div> <p> {a.para} </p></div>
//               <div> <h5> {a.date} </h5></div>
//               <div> <h3> {a.stage} </h3></div>
//               <div> <h4> {a.icon} </h4></div>
//               </div>
//             })}
           
      
        
//         </Slider>
//       </div>
//       </section>
//     );
//   }
// }