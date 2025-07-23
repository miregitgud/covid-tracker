import Hero from "../components/Hero/Hero";
import Province from "../components/Province/Province";
import FormCovid from "../components/FormCovid/FormCovid";
import { useState } from "react";
import data from '../utils/constants/provinces'



function Provinsi() {

    const [kasusProvinsi, setKasusProvinsi] = useState(data.provinces);

    const handleAddData = (updatedProvince) => {
        setKasusProvinsi(updatedProvince);
      };
    
      return (
        <>
          <Hero />
          <Province province={kasusProvinsi} />
          <FormCovid setProvince={handleAddData} provinceData={kasusProvinsi} />
        </>
      );
    }

export default Provinsi;