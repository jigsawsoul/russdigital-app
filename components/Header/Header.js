import Link from "next/link";
import { useGlobalStore } from "../../stores/globalStore";
import {
  Container,
  NavigationMenu,
  Logo,
  IconButton,
  Button,
} from "../../components";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header({ menuItems }) {
  const { isNavShown, toggleNav } = useGlobalStore();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="px-4 lg:px-10">
        <div className="flex justify-between items-center row h-[88px] lg:h-[106px]">
          <Link href="/">
            <a className="block h-[30px] mt-2 lg:mt-0">
              <Logo />
            </a>
          </Link>
          <div className="ml-auto flex items-center">
            <NavigationMenu className="hidden lg:block" menuItems={menuItems} />
            <IconButton
              onClick={toggleNav}
              aria-label="Toggle navigation"
              aria-controls="primary-navigation"
              aria-expanded={isNavShown}
              className="lg:hidden group"
            >
              <span className="block h-[2px] w-[18px] bg-black transition-all"></span>
              <span className="block h-[2px] w-[18px] bg-black transition-all group-hover:w-3"></span>
              <span className="block h-[2px] w-[18px] bg-black transition-all"></span>
            </IconButton>
            <Button className="ml-10 uppercase hidden xl:block">
              Work with us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
