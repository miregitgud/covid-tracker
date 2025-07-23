import StyledSituationCard from "./StyledSituationCard";

const SituationCard = (props) => {
  const { kasus } = props;

  let cardColor = "";

  if (kasus.status === "confirmed") {
    cardColor = "#06D6A0";
  } else if (kasus.status === "recovered") {
    cardColor = "#118AB2";
  } else if (kasus.status === "death") {
    cardColor = "#EF476F";
  }

  return (
    <StyledSituationCard>
      <div className="card">
        <h3 className="card__status">{kasus.status.charAt(0).toUpperCase() + kasus.status.slice(1) || ""}</h3>
        <h2 id="kasus" className="card__total kasus" style={{ color: cardColor }}>
          {kasus.total.toLocaleString("en-us")}
        </h2>
      </div>
    </StyledSituationCard>
  );
};

export default SituationCard;
