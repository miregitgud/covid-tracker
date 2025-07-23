import Hero from "../components/Hero/Hero";
import Situation from "../components/Situation/Situation";
import { useEffect, useState } from "react";
import axios from "axios";
import RegionalSituation from "../components/RegionalSituation/RegionalSituation";

function Main() {

  const URL = `https://covid-fe-2023.vercel.app/api/global.json`
  const [kasusGlobal, setKasusGlobal] = useState([]);
  const [kasusRegion, setKasusRegion] = useState([]);

  async function getDataGlobal() {
    const response = await axios(URL);
    setKasusGlobal(response.data.global);
  }

  async function getDataRegion() {
    const response = await axios(URL);
    setKasusRegion(response.data.regions);
  }

useEffect(() => {
  getDataGlobal();
  getDataRegion();
}, [])

  return (
    <>
      <Hero />
      <Situation kasus={kasusGlobal} setKasus={setKasusGlobal} />
      <RegionalSituation kasus={kasusRegion} setKasus={setKasusRegion} />
    </>
  );
}

export default Main;
