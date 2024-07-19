import { gql } from "@apollo/client";
import * as MENUS from "../constants/menus";
import { BlogInfoFragment } from "../fragments/GeneralSettings";
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
} from "../components";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, featuredImage, seo } = props?.data?.page ?? { title: "" };

  return (
    <>
      <SEO title={seo?.title} description={siteDescription} />
      <MobileMenu menuItems={primaryMenu} />
      <div className="flex flex-col min-h-screen">
        <Header menuItems={primaryMenu} />
        <Main className="flex-grow">
          <Hero title={title} image={featuredImage?.node?.sourceUrl} />
        </Main>
        <ContactSection />
        <Footer title={siteTitle} menuItems={footerMenu} />
      </div>
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${SeoMetaFragment}
  ${Hero.fragments.entry}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
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
    generalSettings {
      ...BlogInfoFragment
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
