import { ButtonDark } from "./ui/Button";

const Strip = ({ image, title, subtext }) => {
  return (
    <div id="strip">
      <img src={image} />
      <div id="parent-container">
        <div id="container">
          <h2>{title}</h2>
          <p>{subtext}</p>
          <a href="http://www.google.com">
            <ButtonDark style="custom-padding">Learn More</ButtonDark>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Strip;
