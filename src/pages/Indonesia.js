import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Situation from "../components/Situation/Situation";
import Province from "../components/Province/Province";

function Indonesia() {

    const URL = `https://covid-fe-2023.vercel.app/api/indonesia.json`;
    const [kasusNasional, setKasusNasional] = useState([]);
    const [kasusProvinsi, setKasusProvinsi] = useState([]);

    async function getDataIndo() {
        const response = await axios(URL);
        setKasusNasional(response.data.indonesia);
      }

    async function getDataProv() {
        const response = await axios(URL);
        setKasusProvinsi(response.data.regions);
      }
    
    useEffect(() => {
      getDataIndo();
      getDataProv();
    }, [])
    return (
        <>
        <Hero />
        <Situation kasus={kasusNasional} setKasus={setKasusNasional}/>
        <Province province={kasusProvinsi} />
        </>
    )
}

export default Indonesia;