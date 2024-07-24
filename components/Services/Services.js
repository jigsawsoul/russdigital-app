import { gql } from "@apollo/client";
import { Container, ServiceItem } from "..";

export default function Services({ items }) {
  const icons = [
    "https://html.themegenix.com/frisk/assets/img/icon/feature-icon1-1.svg",
    "https://html.themegenix.com/frisk/assets/img/icon/feature-icon1-2.svg",
    "https://html.themegenix.com/frisk/assets/img/icon/feature-icon1-3.svg",
    "https://html.themegenix.com/frisk/assets/img/icon/feature-icon1-4.svg",
    "https://html.themegenix.com/frisk/assets/img/icon/feature-icon1-5.svg",
    "https://html.themegenix.com/frisk/assets/img/icon/feature-icon1-6.svg",
  ];

  return (
    <section className="py-16 lg:py-24">
      <Container>
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
