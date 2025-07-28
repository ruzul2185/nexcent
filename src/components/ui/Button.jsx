export const ButtonDark = ({ children, style = "" }) => {
  return <button className={`button-dark ${style}`}>{children}</button>;
};

// className = ""
// "button-dark"

// className = "custom-padding"
// "button-dark custom-padding"

export const Button = ({ children }) => {
  return <button className="button-normal">{children}</button>;
};
