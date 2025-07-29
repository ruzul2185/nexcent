import icon1 from "/icon1.svg";
import icon2 from "/icon2.svg";
import icon3 from "/icon3.svg";
import icon4 from "/icon4.svg";
import icon5 from "/icon5.svg";
import icon6 from "/icon6.svg";
import icon7 from "/icon7.svg";

const iconList = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

const transformedIcon = (icon) => {
  return <img src={icon} />;
};

const Sponsor = () => {
  return (
    <section id="sponsor">
      <div>
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div id="icons-list">{iconList.map(transformedIcon)}</div>
    </section>
  );
};

export default Sponsor;
