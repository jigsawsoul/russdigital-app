import { gql } from "@apollo/client";
import { Container } from "../../components";

export default function Hero({ title, image }) {
  return (
    <div
      className="bg-cover overflow-hidden bg-gray-100 text-center z-auto"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <Container>
        <div className="py-24 md:py-36 xl:py-44">
          <h1 className="text-white font-title text-4xl md:text-6xl xl:text-[80px] font-semibold">
            {title}
          </h1>
        </div>
      </Container>
    </div>
  );
}

Hero.fragments = {
  entry: gql`
    fragment HeroFragment on NodeWithFeaturedImage {
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
