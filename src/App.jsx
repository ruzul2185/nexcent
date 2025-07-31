import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sponsor from "./components/Sponsor";
import Community from "./components/Community";
import Strip from "./components/Strip";
import Statistics from "./components/Statistics";

const StripData = [
  {
    image: "/strip1.svg",
    title: "The unseen of spending three years at Pixelgrade",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  },
  {
    image: "/strip2.svg",
    title: "How to design your site footer like we did",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Community />
      <Strip
        image={StripData[0].image}
        title={StripData[0].title}
        subtext={StripData[0].subtext}
      />
      <Statistics />
      <Strip
        image={StripData[1].image}
        title={StripData[1].title}
        subtext={StripData[1].subtext}
      />
    </>
  );
};

export default App;
