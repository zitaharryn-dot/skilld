import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import { Show, UserButton } from "@clerk/tanstack-react-start";
import { ModeToggle } from "#/components/theming/mode-toggle.tsx";

const Navbar = () => (
  <nav className="navbar">
    <div className="brand">
      <div className="mark">
        <div className="glyph" />
      </div>
      <Link to="/">
        <span>Skilld</span>
      </Link>
    </div>

    <div className="actions">
      <ModeToggle />
      <Show when="signed-in">
        <UserButton />
      </Show>

      <Show when="signed-out">
        <Link to="/sign-in/$" className="btn-primary">
          <LogIn size={16} />
          Sign In
        </Link>
      </Show>
    </div>
  </nav>
);

export default Navbar;
