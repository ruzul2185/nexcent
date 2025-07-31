const DATA = [
  {
    image: "/stat1.svg",
    title: "2,245,341",
    subtext: "Members",
  },
  {
    image: "/stat2.svg",
    title: "2,245,341",
    subtext: "Members",
  },
  {
    image: "/stat3.svg",
    title: "2,245,341",
    subtext: "Members",
  },
  {
    image: "/stat4.svg",
    title: "2,245,341",
    subtext: "Members",
  },
];

const Statistics = () => {
  return (
    <section id="statistics">
      <div id="container">
        <div id="text-container">
          <h2 id="head-text">
            Helping a local <br />
            <span className="highlight">business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div id="grid-container">
          {DATA.map((item) => (
            <StatCard
              image={item.image}
              title={item.title}
              subtext={item.subtext}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

const StatCard = ({ image, title, subtext }) => {
  return (
    <div id="statcard">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{subtext}</p>
      </div>
    </div>
  );
};
