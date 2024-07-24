import { gql } from "@apollo/client";
import * as MENUS from "../constants/menus";
import { SeoMetaFragment } from "../fragments/SeoMeta";
import { BlogInfoFragment } from "../fragments/GeneralSettings";
import {
  SEO,
  MobileMenu,
  Header,
  Main,
  Footer,
  NavigationMenu,
  ContactSection,
  Breadcrumbs,
  SlickSlider,
  Container,
  Content,
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
  const { title, content, seo } = props?.data?.portfolio ?? {
    title: "",
  };

  return (
    <>
      <SEO title={seo?.title} description={siteDescription} />
      <MobileMenu menuItems={primaryMenu} />
      <div className="flex flex-col min-h-screen">
        <Header menuItems={primaryMenu} />
        <Main className="flex-grow">
          <Breadcrumbs items={seo?.breadcrumbs} />
          <Container>
            <div className="py-10 lg-py-14 xl:py-28">
              <SlickSlider />
              <div className="py-10 flex flex-col lg:flex-row justify-between flex-wrap">
                <div className="col-lg-8 lg:w-8/12">
                  <h1 className="font-title mb-4 text-3xl md:text-4xl lg:text-6xl font-semibold">
                    {title}
                  </h1>
                  <Content content={content} />
                </div>
                <div className="lg:w-4/12 xl:w-3/12">
                  <dl>
                    <dt className="text-lg mb-1">Service:</dt>
                    <dd className="font-title font-semibold mb-8">
                      DEVELOPMENT
                    </dd>
                    <dt className="text-lg mb-1">Software:</dt>
                    <dd className="font-title font-semibold mb-8">
                      WORDPRESS, FIGMA
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </Container>
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
  ${NavigationMenu.fragments.entry}
  query GetProfolioData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    portfolio(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
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
