import StyledRegionalSituationCard from "./StyledRegionalSituationCard";

const RegionalSituationCard = (props) => {
  const { kasus } = props;

  return (
    <StyledRegionalSituationCard>
      <div className="card">
        <h3>{kasus.name}</h3>
        <img src="https://img.icons8.com/ios/50/protection-mask.png" alt="" />
        <h5>Confirmed</h5>
        <h4 className="confirmed">{kasus.numbers.confirmed.toLocaleString("en-us")}</h4>
        <img src="https://img.icons8.com/ios/50/trust--v1.png" alt="" />
        <h5>Recovered</h5>
        <h4 className="recovered">{kasus.numbers.recovered.toLocaleString("en-us")}</h4>
        <img src="https://img.icons8.com/ios/50/skull.png" alt="" />
        <h5>Death</h5>
        <h4 className="death">{kasus.numbers.death.toLocaleString("en-us")}</h4>
        <div className="card-right"></div>
      </div>
    </StyledRegionalSituationCard>
  );
};

export default RegionalSituationCard;
