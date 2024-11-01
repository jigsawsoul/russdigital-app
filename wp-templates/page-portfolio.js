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
  Hero,
  Portfolio,
} from "../components";

export default function Component(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const { title, featuredImage, seo } = props?.data?.page ?? { title: "" };
  const portfolioItems = props?.data?.allPortfolio?.nodes ?? [];

  return (
    <>
      <SEO title={seo?.title} description={seo?.metaDesc} />
      <MobileMenu menuItems={primaryMenu} />
      <div className="flex flex-col min-h-screen">
        <Header menuItems={primaryMenu} />
        <Main className="flex-grow">
          <Hero title={title} image={featuredImage?.node?.sourceUrl} />
          <Portfolio items={portfolioItems}></Portfolio>
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
  ${Portfolio.fragments.entry}
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
    allPortfolio {
      ...PortfolioFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
