import { gql } from "@apollo/client";
import * as MENUS from "../constants/menus";
import { SeoMetaFragment } from "../fragments/SeoMeta";
import {
  Animate,
  SEO,
  MobileMenu,
  Header,
  Main,
  Footer,
  Services,
  NavigationMenu,
  ContactSection,
  HeroHome,
} from "../components";

export default function Component(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const { title, featuredImage, seo } = props?.data?.page ?? { title: "" };
  const servicesItems = props?.data?.services?.nodes ?? [];

  return (
    <>
      <SEO title={seo?.title} description={seo?.metaDesc} />
      <MobileMenu menuItems={primaryMenu} />
      <div className="flex flex-col min-h-screen">
        <Header menuItems={primaryMenu} type="home" />
        <Main className="flex-grow">
          <HeroHome
            title={title}
            image={featuredImage?.node?.sourceUrl}
            type="home"
          />
          <Services
            title="What We Can Do for Our Clients"
            items={servicesItems}
          ></Services>
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
  ${HeroHome.fragments.entry}
  ${Services.fragments.entry}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ...HeroHomeFragment
      seo {
        ...SeoMetaFragment
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    services {
      ...ServicesFragment
    }
  }
`;
