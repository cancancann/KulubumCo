import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import MediaCard from "../../components/MediaCard/MediaCard"
import Navbar from "../../components/Navbar/Navbar"

const HomePage = (props) => {
    const [count,setCount] = useState([1,2,3,4,5,6,7,8])
    return (
        <div className="Main h-screen" style={{ paddingTop: "2rem" }}>
            <Navbar />
            <div style={{display:"flex",justifyContent:"space-evenly",padding:"2rem",margin:"2rem",flexFlow:"row wrap",gap:"10px 30px"}}>
                {count?.map(x=>{
                    return(
                        <MediaCard key={x}/>
                    )
                })}
            </div>
            <Footer/>
        </div>

    )
}

export default HomePage