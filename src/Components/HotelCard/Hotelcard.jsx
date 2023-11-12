import React from 'react';
import { useEffect } from 'react';

function Hotelcard() {
    const getData=async (city, date)=>{
        console.log("get data called")
        const ApisUrl='https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"mumbai"}' 
        try {
           const response=await fetch(ApisUrl,{
               headers:{
                   projectID:"f104bi07c490",
                },
                // body:JSON.stringify({"day":"51"})
            });
            if(response.ok){
               console.log(response)
               const data= await response.json();
               console.log(data)
           } else{
            console.error("Error while data fetching");
           }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
      <h1>Hottel card</h1>
    </div>
  )
}

export default Hotelcard;



