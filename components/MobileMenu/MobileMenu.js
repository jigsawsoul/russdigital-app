import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import { useGlobalStore } from "../../stores/globalStore";
import { NavigationMenuMobile, Logo, IconButton } from "../../components";

const CloseIcon = () => (
  <svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

const ContactInfo = () => (
  <div className="font-title text-sm font-semibold">
    <h6 className="mb-2">
      <Link href="tel:07852780306">
        <a>078527 80306</a>
      </Link>
    </h6>
    <h6 className="mb-0">
      <Link href="mailto:info@russdigital.co.uk">
        <a>info@russdigital.co.uk</a>
      </Link>
    </h6>
  </div>
);

const MenuHeader = ({ toggleNav }) => (
  <div className="flex justify-between items-center pt-6 pb-10">
    <Link href="/">
      <a className="block h-[30px]">
        <Logo />
      </a>
    </Link>
    <IconButton onClick={toggleNav} className="hover:rotate-90 transition-all">
      <CloseIcon />
    </IconButton>
  </div>
);

const useRouteChangeEffect = (isNavShown, toggleNav) => {
  const router = useRouter();

  const handleRouteChange = useCallback(() => {
    if (isNavShown) {
      toggleNav();
    }
  }, [isNavShown, toggleNav]);

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, handleRouteChange]);
};

const useClickHandlers = (toggleNav) => {
  const handleBackgroundClick = useCallback(
    (e) => {
      e.stopPropagation();
      toggleNav();
    },
    [toggleNav]
  );

  const handleInnerClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return {
    handleBackgroundClick,
    handleInnerClick,
  };
};

export default function MobileMenu({ menuItems }) {
  const { isNavShown, toggleNav } = useGlobalStore();

  useRouteChangeEffect(isNavShown, toggleNav);

  const { handleBackgroundClick, handleInnerClick } =
    useClickHandlers(toggleNav);

  return (
    <div
      onClick={handleBackgroundClick}
      className={classNames(
        "fixed bg-black/60 inset-0 transition-all duration-400 z-[9999]",
        {
          "opacity-0 invisible": !isNavShown,
          "opacity-1 visible": isNavShown,
        }
      )}
    >
      <div
        onClick={handleInnerClick}
        className={classNames(
          "max-w-80 bg-white relative left-0 h-full px-5 transition-all duration-500",
          {
            "-translate-x-full": !isNavShown,
            "translate-x-0": isNavShown,
          }
        )}
      >
        <MenuHeader toggleNav={toggleNav} />
        <div className="pb-8 mb-10 border-b-2 border-black">
          <NavigationMenuMobile menuItems={menuItems} />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
