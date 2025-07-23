import styles from "./provinceTable.module.css";

const ProvinceTable = (props) => {
  const { province, provinceIndex } = props;

  return (
    <tbody className={styles.ProvinceTable}>
      <tr>
        <td>{provinceIndex + 1}</td>
        <td>{province.name || province.kota}</td>
        <td>{(province.numbers?.confirmed || province.kasus)?.toLocaleString("en-us")}</td>
        <td>{(province.numbers?.recovered || province.sembuh)?.toLocaleString("en-us")}</td>
        <td>{(province.numbers?.death || province.meninggal)?.toLocaleString("en-us")}</td>
        <td>{(province.numbers?.treatment || province.dirawat)?.toLocaleString("en-us")}</td>
      </tr>
    </tbody>
  );
};

export default ProvinceTable;
