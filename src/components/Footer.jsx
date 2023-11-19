import OLX from "../Images/OLX-logo.png"
const Footer = () => {

    return (
        <>

            <div style={{ backgroundColor: "#E8E9E8", height: "20vh", position: "absolute", top: "100vh", width: "100%", marginTop:"200px" }}>

                <div style={{ display: "flex" }}>

                    <img src={OLX} style={{ marginLeft: "300px", width: "20vh", marginTop: "20px", marginBottom: "20px" }}></img>
                    {/* <p style={{ marginLeft: "300px", width: "10%", marginTop: "20px", marginBottom: "20px" }}>© 2023 foodpanda</p> */}

                    <p style={{ marginLeft: "40px", width: "20%", marginTop: "20px", marginBottom: "20px" }}>
                        Cars
                        <br></br>
                        Flats for rent
                        <br></br>
                        Mobile Phones
                        <br></br>
                        Jobs
                    </p>

                    <p style={{ width: "20%", marginTop: "20px", marginBottom: "20px" }}>
                        Bikes
                        <br></br>
                        Watches
                        <br></br>
                        Books
                        <br></br>
                        Dogs</p>

                    <p style={{ marginLeft: "60px", width: "20%", marginTop: "20px", marginBottom: "20px" }}>All cities Update on COVID-19 in Pakistan pandamart Grocery Delivery pandapro - monthly subscription programme foodpanda home chef Become an affiliate Ramzan deals</p>

                </div>

                <div style={{ backgroundColor: "darkblue", height: "5vh", position: "absolute", top: "100%", width: "100%" }}>
                    <p style={{ marginLeft: "78%", width: "10%", marginTop: "20px", marginBottom: "20px", color: "white", fontSize: "18px" }}>© 2023 foodpanda</p>
                </div>

            </div>

        </>
    )

}

export default Footer