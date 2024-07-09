import classNames from "classnames/bind";
import { Container, NavigationMenu } from "../../components";
import styles from "./Footer.module.scss";

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#E3FF04] font-title text-sm font-semibold">
      <Container>
        {/* <p>{`${title} © ${year}. Powered by WordPress.`}</p> */}
        <div className="border-t-2 border-black py-7">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <p className="mb-4 lg:mb-0">
              <a href="tel:+447852780306">+44 7852 780306</a>
            </p>
            <p>
              <a href="mailto:info@russdigital.co.uk">info@russdigital.co.uk</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
