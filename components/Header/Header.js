import { useEffect, useState } from "react";
import Link from "next/link";
import { useGlobalStore } from "../../stores/globalStore";
import { NavigationMenu, Logo, IconButton, Button } from "../../components";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header({ menuItems, type }) {
  const { isNavShown, toggleNav } = useGlobalStore();
  const [isScrolled, setIsScrolled] = useState(false);

  const logoIsScrolled = type !== "home" ? true : isScrolled;

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWorkTogether = () => {
    document
      .getElementById("work-together")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cx(
        "fixed top-0 right-0 left-0 z-50 bg-white transition-all",
        type,
        {
          scrolled: isScrolled,
        }
      )}
    >
      <div className="px-4 lg:px-10">
        <div className="flex justify-between items-center row h-[88px] lg:h-[106px]">
          <Link href="/">
            <a className="block h-[30px] mt-2 lg:mt-0">
              <Logo isScrolled={logoIsScrolled} />
            </a>
          </Link>
          <div className="ml-auto flex items-center">
            <NavigationMenu className="hidden lg:block" menuItems={menuItems} />
            <IconButton
              onClick={toggleNav}
              ariaLabel="Toggle navigation"
              ariaControls="primary-navigation"
              ariaExpanded={isNavShown}
              className={cx("lg:hidden group", { "is-scrolled": isScrolled })}
            >
              <span className="block h-[2px] w-[18px] bg-black transition-all"></span>
              <span className="block h-[2px] w-[18px] bg-black transition-all group-hover:w-3"></span>
              <span className="block h-[2px] w-[18px] bg-black transition-all"></span>
            </IconButton>
            <Button
              className="ml-10 uppercase hidden xl:block bg-black text-white"
              onClick={scrollToWorkTogether}
              ariaLabel="Work with us"
            >
              Work with us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
