import Grid from "@mui/material/Grid"
import React, { useEffect, useState } from "react"
import CategorisesBar from "../../components/CategorisesBar/CategorisesBar"
import DetailBox from "../../components/DetailBox/DetailBox"
import Footer from "../../components/Footer/Footer"
import MediaCard from "../../components/MediaCard/MediaCard"
import Navbar from "../../components/Navbar/Navbar"
import SnackBar from "../../components/SnackBar/SnackBar"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "notistack"
import "./home.css"

/*Grid Sistemi oluşturulacak .. */
/* En son olarak sayfa  ayarlanması etkin hale gelecek..*/
const HomePage = (props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8])
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const [sonuc,setSonuc]=useState(false)

    useEffect(()=>{
        if (sonuc === true){
            setTimeout(() => {
                enqueueSnackbar("Giriş yapınız", { variant: "error" })
                navigate('/login')
            }, 1000);
        }
    })
    useEffect(() => {
        console.log("Hello")
        axios.defaults.withCredentials = true;
        axios({ url: 'http://localhost:4000/api/home', method: 'get', }).then(res => {
            if (res?.data?.success) {
                setLoading(false)
            } else {
                setSonuc(true)
            }
        }).catch(err => {
            setSonuc(true)
        })

    }, [])


    return (
        <React.Fragment>


            {loading === true ?
                <div className="container">
                    <div className="loader-container">
                        <div className="spinner"></div>
                    </div>
                </div>
                :
                <div className="Main h-screen " style={{ paddingTop: "2rem" }}>

                    <div>

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
                                <CategorisesBar />
                            </Grid>

                        </Grid>

                        <Footer />
                    </div>
                </div>

            }

        </React.Fragment>

    )
}

export default HomePage