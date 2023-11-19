import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdDetails =()=>{
    const[singalAd, setSingalAd]=useState("")

    const id=useParams()
    console.log("id",id.id)

    useEffect(()=>{
        getSingalAd()
        

    },[])

    const getSingalAd= async()=>{
        await fetch("http://localhost:4000/olx/" + id.id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => setSingalAd(res.data))
      
            .catch((e) => console.log("e --->", e));
        
    }
    console.log("singalAd---->", singalAd)



    if(!singalAd){
        return<>Loading...</>
    }

    return(
        <>
        <Header/>

        <Footer/>
        </>
    )
}

export default AdDetails;