import React from "react";
import styles from "./province.module.css";
import ProvinceTable from "../ProvinceTable/ProvinceTable";

const Province = (props) => {
  const { province } = props;
  return (
    <div className={styles.container}>
      <section className={styles.provinsi}>
        <h2 className={styles.provinsi__title}>Situation by Provinces</h2>
        <p>Data Covid Berdasarkan Provinsi</p>
        <div className={styles.provinsi__container}>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Kota</th>
                <th>Kasus</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            {province.map(function (province, provinceIndex) {
              return <ProvinceTable province={province} provinceIndex={provinceIndex} />;
            })}
          </table>
        </div>
      </section>
    </div>
  );
};

export default Province;
