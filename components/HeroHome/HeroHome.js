import { gql } from "@apollo/client";
import { Container, Button } from "..";
import styles from "./HeroHome.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function HeroHome({ title, image, type }) {
  return (
    <div className={cx("hero bg-black z-auto relative mt-[-106px]", type)}>
      <div className="h-[350px] w-full lg:w-[80%] lg:h-auto lg:absolute top-0 right-0 bottom-0 text-right">
        <img
          src={image}
          alt="Russ Digital - Creative Agency"
          className="object-cover w-full h-full inline-block"
        />
      </div>
      <Container>
        <div className="py-8 lg:py-36 xl:py-44 flex flex-col max-w-screen-lg relative z-400">
          <h1 className="text-white font-title text-4xl md:text-6xl lg:text-[80px] font-semibold">
            {title}
          </h1>
          <p className="font-body text-xl text-white mt-8 max-w-md">
            We are digital agency that helps businesses develop their brand and
            win customers.
          </p>
          <div className="mt-8">
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
