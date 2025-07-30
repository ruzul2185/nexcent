const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
