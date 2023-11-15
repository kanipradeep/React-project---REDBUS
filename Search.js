import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Box from "@mui/material/Box";
import {json, useNavigate} from "react-router-dom"
import { Context } from './Context';
import "./Maine.css"
import Findout from "./Findout.json"



const Search = () => {
    //  const [state] = useContext(Context);
    //  console.log(state);

  let[from, setFrom]=useState("")
  let[to, setTo] = useState("")
  let[date,setDate] = useState("")
  let[error, setError] = useState(false)

    var start = (e)=>{
      setFrom(e.target.value)
      console.log(e.target.value);
    }
    var end = (e)=>{
      setTo(e.target.value)
      console.log(e.target.value);
    }
    var day = (e)=>{
      setDate(e.target.value)
      console.log(e.target.value);
    }
     var alot =useNavigate();

    var submit = (e)=>{
      e.preventDefault();
        if(from.length===0 && to.length===0 && date.length ===0){
          setError(true)
        }
        else{
          from = from.toLocaleLowerCase()
          to = to.toLocaleLowerCase()
               var z = Findout. busdetails.find((y)=>{
                if(y.from===from && y.to===to && y.date===date){
                  return y
                }
                })  
                console.log(z);
                
              //  alot(`/Travel?info=${JSON.stringify(z)}`)
               
                alot(`Travel?info=${JSON.stringify(z)}`)       
            
            
        }
         }  

  

  return (
    <div>
    <section className="search-sec">
      <div className="search-container"> 
        <div className="search-row">
           
            <div className="places">
              <div id="direct"> 
            <DirectionsBusIcon/>
            </div>
            <div>
              <TextField id="filled-basic" label="From" variant="filled" onChange={start} name="from" />
            </div>
            </div> 

            
            <CompareArrowsIcon id="arrow"/>
            
            <div className="places"> 
            <div id="direct">
            <DirectionsBusIcon />
            </div> 
              <TextField inputSt className="one" id="filled-basic" label="To" variant="filled" onChange={end} name="to"/>
            </div>

            <div className="places"> 
            <div id="direct">
              <CalendarMonthIcon/>
            </div>  
              <TextField id="filled-basic" label="Date" variant="filled" onChange={day} name="date" />
            </div>

            <div className="search-bus">
            <Button variant="contained" id="search-bus" onClick={submit}>SEARCH BUSES</Button>
            </div>        
            </div>
              {error && from.length === 0 ? <p id="alert">Enter 'From' & 'To'</p>:'' }
                  
      </div>
    </section>
    </div>
  )
  }

export default Search
