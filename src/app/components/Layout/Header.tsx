import { HamburgerButton } from "../Content/HamburgerButton";
import { AnimatedMenu } from "../Content/AnimatedMenu";
import { HomeIcon } from "../Content/HomeIcon";

export const Header = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = [
    { name: 'Home', link: '' },
    { name: 'About Me', link: 'about' },
    { name: 'My Tech Stack', link: 'services' },
    { name: 'My Projects', link: 'portfolio' },
    { name: 'Find Me', link: 'contact' }
  ]

  return (
    <div className="relative">
      <HomeIcon />
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
      <AnimatedMenu isOpen={isOpen} onClick={toggleMenu} menuItems={menuItems} />
    </div>
  );
};
