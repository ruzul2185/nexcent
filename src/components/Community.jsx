import Card from "./ui/Card";

const Data = [
  {
    icon: "/card1.svg",
    title: "Membership Organisations",
    subtitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/card2.svg",
    title: "National Associations",
    subtitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/card3.svg",
    title: "Clubs And Groups",
    subtitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const Commuinty = () => {
  return (
    <section id="community">
      <div>
        <h2>Manage your entire community in a single system</h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div id="card-grid">
        {Data.map((item) => (
          <Card icon={item.icon} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </section>
  );
};

export default Commuinty;
