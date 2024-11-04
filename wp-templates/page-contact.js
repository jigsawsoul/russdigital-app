import { gql } from "@apollo/client";
import * as MENUS from "../constants/menus";
import { SeoMetaFragment } from "../fragments/SeoMeta";
import {
  SEO,
  MobileMenu,
  Header,
  Main,
  Footer,
  NavigationMenu,
  ContactSection,
  Container,
  Hero,
} from "../components";
import Image from "next/image";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const { title, featuredImage, seo } = props?.data?.page ?? {
    title: "",
  };

  const servicesItems = props?.data?.services?.nodes ?? [];

  return (
    <>
      <SEO title={seo?.title} description={seo?.metaDesc} />
      <MobileMenu menuItems={primaryMenu} />
      <div className="flex flex-col min-h-screen">
        <Header menuItems={primaryMenu} />
        <Main className="flex-grow">
          <Hero title={title} image={featuredImage?.node?.sourceUrl} />
          <section className="py-16 lg:py-24">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-[#F6F5F3] py-10 px-9 font-body flex flex-col space-y-4 h-full">
                  <Image
                    src="https://api.russdigital.co.uk/wp-content/uploads/2024/10/location-pin-alt.svg"
                    className="w-10 h-10 mb-8 md:mb-12"
                    alt="Location Icon"
                  />
                  <h2 className="font-title text-xl md:text-2xl font-bold">
                    Location
                  </h2>
                  <p className="md:text-lg">Gravesend, Kent, England</p>
                </div>
                <div className="bg-[#F6F5F3] py-10 px-9 font-body flex flex-col space-y-4 h-full">
                  <Image
                    src="https://api.russdigital.co.uk/wp-content/uploads/2024/10/speech-bubble.svg"
                    className="w-10 h-10 mb-8 md:mb-12"
                    alt="Speech Icon"
                  />
                  <h2 className="font-title text-xl md:text-2xl font-bold">
                    Email Address
                  </h2>
                  <p className="md:text-lg">
                    <a href="mailto:info@russdigital.co.uk">
                      info@russdigital.co.uk
                    </a>
                  </p>
                </div>
                <div className="bg-[#F6F5F3] py-10 px-9 font-body flex flex-col space-y-4 h-full">
                  <Image
                    src="https://api.russdigital.co.uk/wp-content/uploads/2024/10/phone.svg"
                    className="w-10 h-10 mb-8 md:mb-12"
                    alt="Phone Icon"
                  />
                  <h2 className="font-title text-xl md:text-2xl font-bold">
                    Phone Number
                  </h2>
                  <p className="md:text-lg">
                    <a href="tel:+447851780306">+44 7851 780306</a>
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </Main>
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${SeoMetaFragment}
  ${Hero.fragments.entry}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ...HeroFragment
      seo {
        ...SeoMetaFragment
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
