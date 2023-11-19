
import Header from "../components/Header"
import Footer from "../components/Footer"
import { uploadImage } from "../config/firebase"

import { useState } from "react"


const PostAd = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState([])

    console.log(file)


    const addData = async () => {

        const resURL = await uploadImage(file[0])

        fetch('http://localhost:4000/olx/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                image_url: resURL

            })
        }).then(res => res.json())
            .then(res => console.log(res))
            .catch(e => console.log('e --->', e))

    }


    return (
        <>
            <Header />

            <div style={{ textAlign: "center", marginTop: "50px" }}>

                <h1>Add Post</h1>
                <input
                    style={{ padding: "10px", marginBottom: "10px", width: "40%", borderRadius: "5px", border: "1px solid #ccc" }}
                    placeholder="Title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                    style={{ padding: "10px", marginBottom: "10px", width: "40%", borderRadius: "5px", border: "1px solid #ccc" }}
                    placeholder="Description"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <input
                    style={{ padding: "10px", marginBottom: "10px", width: "40%", borderRadius: "5px", border: "1px solid #ccc" }}
                    placeholder="Price"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                />

                <br></br>

                <label
                    style={{
                        display: "block",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        width: "200px",
                        margin: "auto"
                    }}
                >
                    <input type="file" onChange={(e) => setFile(e.target.files)} />

                </label>

                <input
                    type="submit"
                    style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                        marginTop: "10px"
                    }}
                    value="Submit" onClick={() => addData()}
                />


            </div>
            <Footer />

        </>
    )
}

export default PostAd