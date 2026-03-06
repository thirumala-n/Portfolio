import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import "../styles/Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = ["Home", "Skills", "Projects", "Education", "Certificates", "Contact"];

  return (
    <nav className={`navbar ${theme} ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-inner">
          {/* Logo (LEFT) */}
          <div className="logo" onClick={() => scrollToSection("hero")}>
            Thirumala
          </div>

          {/* Desktop links (RIGHT) */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollToSection(link)}>
                {link}
              </button>
            ))}
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollToSection(link)}>
                {link}
              </button>
            ))}
            <button onClick={toggleTheme}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
