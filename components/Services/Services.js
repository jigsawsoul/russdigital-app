import { gql } from "@apollo/client";
import { Container, ServiceItem } from "..";

export default function Services({ items, title = null }) {
  const icons = [
    "https://api.russdigital.co.uk/wp-content/uploads/2024/10/feature-icon1-1.svg",
    "https://api.russdigital.co.uk/wp-content/uploads/2024/10/feature-icon1-2.svg",
    "https://api.russdigital.co.uk/wp-content/uploads/2024/10/feature-icon1-3.svg",
    "https://api.russdigital.co.uk/wp-content/uploads/2024/10/feature-icon1-4.svg",
    "https://api.russdigital.co.uk/wp-content/uploads/2024/10/feature-icon1-5.svg",
    "https://api.russdigital.co.uk/wp-content/uploads/2024/10/feature-icon1-6.svg",
  ];

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="w-full md:w-8/12 xl:w-7/12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-title font-semibold">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items?.map((item, index) => (
            <div className="col-span-1" key={index}>
              <ServiceItem item={item} icon={icons[index % icons.length]} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

Services.fragments = {
  entry: gql`
    fragment ServicesFragment on RootQueryToServiceConnection {
      nodes {
        title
        uri
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `,
};
