import { gql } from "@apollo/client";
import { Container, PortfolioItem } from "../";

export default function Portfolio({ items }) {
  return (
    <section className="bg-[#202020] text-white py-16 lg:py-24">
      <Container>
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="w-full md:w-8/12 xl:w-7/12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-title font-semibold text-[#F6F5F3]">
              Discover Our Selected Projects
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {items?.map((item, index) => (
            <div className="col-span-1" key={index}>
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

Portfolio.fragments = {
  entry: gql`
    fragment PortfolioFragment on RootQueryToPortfolioConnection {
      nodes {
        title
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  `,
};
