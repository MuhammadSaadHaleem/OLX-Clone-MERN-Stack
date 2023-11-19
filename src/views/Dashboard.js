import Header from "../components/Header"
import Footer from "../components/Footer"
import DashBoardCard from "../components/DashboardCard"
import Ad from "../Images/Ad.jpg"
import "./Dashboard.css"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"


const Dashboard = () => {

    const [adsData, setAdsData]=useState()
    const navigate = useNavigate()


    useEffect (()=>{

        getAdsCollection()
    },[]) 

    async function getAdsCollection(){
        const getAds = await fetch('http://localhost:4000/olx/')
        const ads = await getAds.json()
        console.log('ads----->', ads.data)

        setAdsData(ads.data)
      }

    

      
    return (
        <>
            <Header />

            <div className="container">
                <div>
                    <img src={Ad}></img>
                </div>

                <div>
                    <h1>All Categories</h1>
                    <div style={{ marginLeft: "20px", flexWrap: "flex", width: "50%", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                        <img src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" style={{ marginLeft: "50px", width: "100px" }}></img>
                        <img src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" style={{ marginLeft: "50px", width: "100px" }}></img>

                        

                    </div>
                </div>

                <div>
                    <div style={{display:"flex", position:"relative", justifyContent:"center"}} >
                        
                    
                    {adsData.map(item =>{
                        return <>
                        <DashBoardCard data={item} image={item.image_url} onClick={()=> navigate(`/adDetails/${item._id}`)}/> 
                            
                            </>
                        
                    })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Dashboard