import React from 'react'
import "../Primo/Primo.css"

const Primo = () => {
    var primo=[
        {
          image: "https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg",
          heading: "1 of 5 buses qualify",
          para: "Primo’s strict safety qualification ensures a safer travel for you"  
        },

        {
            image: "https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg",
            heading: "Preferred by 90%",
            para: "90% of travellers re-book Primo buses for its punctuality and comfort"  
        },

        {
            image: "https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg",
            heading: "9 Lac+ monthly travellers",
            para: "In 2022, 9 Lac+ people traveled with Primo every month"  
        }
    ]




  return (
    <section className="primo-sec">
        <div className="primo-container"> 
            <div className="primo-top">
                    <div className="primo1">
                        <img src="https://s1.rdbuz.com/web/images/homeV2/primoSection/primoTopBanner.svg" alt="Primo"/>
                    </div>
            </div>
            <div className="primo-row"> 
                {primo.map((a,b)=>{
                    return <div className="primo-card" key={b}> 

                    <div className="pri-image">
                        <img src={a.image} alt="promo"/>
                    </div>

                    <div className="pri-content"> 
                    <h4> {a.heading} </h4>
                    <p> {a.para} </p>
                    </div>
                 
                               
                    </div>
                })}
            
            
            </div>
            
        </div> 

    </section>
  )
}

export default Primo
