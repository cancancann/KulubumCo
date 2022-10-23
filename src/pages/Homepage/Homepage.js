import Grid from "@mui/material/Grid"
import { useState } from "react"
import CategorisesBar from "../../components/CategorisesBar/CategorisesBar"
import DetailBox from "../../components/DetailBox/DetailBox"
import Footer from "../../components/Footer/Footer"
import MediaCard from "../../components/MediaCard/MediaCard"
import Navbar from "../../components/Navbar/Navbar"
import SnackBar from "../../components/SnackBar/SnackBar"


/*Grid Sistemi oluşturulacak .. */
/* En son olarak sayfa  ayarlanması etkin hale gelecek..*/
const HomePage = (props) => {
    const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8])
    return (
        <div className="Main h-screen" style={{ paddingTop: "2rem" }}>
            <Navbar />
            <DetailBox />
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div style={{ padding: '4rem' }}>
                        <SnackBar />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", padding: "1rem", margin: "2rem", flexFlow: "row wrap", gap: "10px 30px" }}>
                        {count?.map(x => {
                            return (
                                <MediaCard key={x} />
                            )
                        })}
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <CategorisesBar/>
                </Grid>

            </Grid>

            <Footer />
        </div>

    )
}

export default HomePage