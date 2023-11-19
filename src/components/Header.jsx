import OlxLogo from "../Images/OLX-logo.png"
import MotorCar from "../Images/motor-car.png"
import Property from "../Images/property.png"
import OlxLogoBlack from "../Images/OLX-logo-black.png"
import "./Header.css"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()


    return (

        <>

            <div style={{ backgroundColor: "#E8E9E8", height: "17vh" }}>
                <div className="step1">
                    <img src={OlxLogo} style={{ marginTop: "10px" }}></img>

                    <img src={MotorCar} style={{ marginLeft: "2%" }}></img>
                    <p>Motors</p>

                    <img src={Property} style={{ marginLeft: "2%" }}></img>
                    <p>Property</p>
                </div>

                <div className="step2" >

                    <img src={OlxLogoBlack} onClick={()=> navigate('/dashboard')}></img>

                    <input placeholder="Pakistan" style={{ marginLeft: "2%", border: "4px solid black", width: "30vh" }} ></input>
                    <input placeholder="Find Cars, Mobile Phones and more..." style={{ marginLeft: "2%", border: "4px solid black", width: "70vh" }}></input>

                    <button style={{ background: "none", border: "none", fontSize: "20px", marginLeft: "100px" }} onClick={() => navigate("/signIn")}><strong><u>Login</u></strong></button>

                    <button style={{ backgroundColor: "darkblue", color: "white", width: "300px", borderRadius: "50px", fontSize: "20px", marginLeft: "50px", marginRight: "15%" }} onClick={() => navigate("/postAd")}> Post Ad</button>

                </div>
            </div>

        </>
    )

}

export default Header;