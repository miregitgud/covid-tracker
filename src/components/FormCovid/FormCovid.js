import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./FormCovid.module.css";
import image1 from "../../assets/form.svg";

const FormCovid = (props) => {
  const [formData, setFormData] = useState({
    province: "",
    status: "",
    jumlah: "",
  });

  const { setProvince, provinceData } = props;

  const [isprovinceError, setIsProvinceError] = useState(false);
  const [isJumlahError, setisJumlahError] = useState(false);
  const [isStatusError, setisStatusError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { province, status, jumlah } = formData;

  const validate = () => {
    if (jumlah === "" && province === "" && status === "") {
      setIsProvinceError(true);
      setisJumlahError(true);
      setisStatusError(true);
    } else if (province === "") {
      setIsProvinceError(true);
    } else if (jumlah === "" || jumlah < 1) {
      setisJumlahError(true);
    } else if (status === "") {
      setisStatusError(true);
    } else if (province !== "" && status !== "" && jumlah >= 1) {
      setIsProvinceError(false);
      setisJumlahError(false);
      setisStatusError(false);
      return true;
    }
  };

  const addData = () => {
    if (province !== "" && jumlah !== "" && status !== "" && province !== "") {
      const updatedProvinceData = provinceData.map((data) => {
        if (data.kota === province) {
          return {
            ...data,
            kasus:
              status === "kasus"
                ? parseInt(data.kasus) + parseInt(jumlah)
                : data.kasus,
            sembuh:
              status === "sembuh"
                ? parseInt(data.sembuh) + parseInt(jumlah)
                : data.sembuh,
            meninggal:
              status === "meninggal"
                ? parseInt(data.meninggal) + parseInt(jumlah)
                : data.meninggal,
            dirawat:
              status === "dirawat"
                ? parseInt(data.dirawat) + parseInt(jumlah)
                : data.dirawat,
          };
        } else {
          return data;
        }
      });
      setProvince(updatedProvinceData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && addData();
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src={image1} alt="placeholder" />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.FormCovid__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.FormCovid}>
              <label>Provinsi</label>
              <select
                onChange={handleChange}
                className={styles.FormCovid__select}
                id="province"
                name="province"
                value={province}
              >
                <option value="" disabled selected hidden></option>
                {provinceData.map((data, index) => {
                  return (
                    <option key={index} value={data.kota}>
                      {data.kota}
                    </option>
                  );
                })}
              </select>
              {isprovinceError && <Alert>Provinsi tidak boleh kosong!</Alert>}
            </div>

            <div className={styles.FormCovid}>
              <label>Status</label>
              <select
                onChange={handleChange}
                name="status"
                value={status}
                className={styles.FormCovid__select}
              >
                <option value="" disabled selected hidden></option>
                <option value="kasus">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="meninggal">Meninggal</option>
                <option value="dirawat">Dirawat</option>
              </select>
              {isStatusError && <Alert>Silahkan pilih status!</Alert>}
            </div>

            <div className={styles.FormCovid}>
              <label>Jumlah</label>
              <input
                onChange={handleChange}
                className={styles.FormCovid__input}
                type="number"
                id="jumlah"
                name="jumlah"
                value={jumlah}
              />
              {isJumlahError && (
                <Alert>Harap memasukkan angka yang valid!</Alert>
              )}
            </div>

            <div>
              <button className={styles.FormCovid__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormCovid;
