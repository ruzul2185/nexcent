import { ButtonDark, Button } from "../components/ui/Button";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* Logo starts here */}
        <div>Logo</div>
        {/* Logo ends here */}

        {/* NavLinks start here */}
        <div>
          <li>
            <ul>Home</ul>
            <ul>Service</ul>
            <ul>Features</ul>
            <ul>Product</ul>
            <ul>Testimonial</ul>
            <ul>FAQ</ul>
          </li>
        </div>
        {/* Navlink ends here */}

        {/* Buttons starts here */}
        <div className="button-container">
          <Button>Login</Button>
          <ButtonDark>Sign up</ButtonDark>
        </div>
        {/* Buttons ends here */}
      </nav>
    </header>
  );
};

export default Navbar;
