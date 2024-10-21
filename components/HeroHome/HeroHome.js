import { gql } from "@apollo/client";
import { Container, Button } from "..";
import styles from "./HeroHome.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function HeroHome({ title, image, type }) {
  return (
    <div
      className={cx("hero bg-cover overflow-hidden bg-gray-100 z-auto", type)}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <Container>
        <div className="py-24 md:py-36 xl:py-44 flex flex-col max-w-screen-lg">
          <h1 className="text-white font-title text-4xl md:text-6xl xl:text-[80px] font-semibold">
            {title}
          </h1>
          <p class="font-body text-xl text-white mt-8 max-w-md">
            We are digital agency that helps businesses develop their brand and
            win customers.
          </p>
          <div class="mt-8">
            <Button className="uppercase bg-[#E3FF04]">View our work</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

HeroHome.fragments = {
  entry: gql`
    fragment HeroHomeFragment on NodeWithFeaturedImage {
      featuredImage {
        node {
          id
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  `,
};
