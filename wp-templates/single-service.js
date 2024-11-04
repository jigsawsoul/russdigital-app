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
  Breadcrumbs,
  Container,
  Content,
} from "../components";
import Image from "next/image";

export default function Component(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const { title, content, featuredImage, seo } = props?.data?.service ?? {
    title: "",
  };

  return (
    <>
      <SEO title={seo?.title} description={seo?.metaDesc} />
      <MobileMenu menuItems={primaryMenu} />
      <div className="flex flex-col min-h-screen">
        <Header menuItems={primaryMenu} />
        <Main className="flex-grow">
          <Breadcrumbs items={seo?.breadcrumbs} />
          <Container>
            <div className="py-10 lg-py-14 xl:py-28 flex flex-col items-center">
              {featuredImage && featuredImage.node && (
                <Image
                  src={featuredImage.node.sourceUrl}
                  alt={featuredImage.node.altText || title}
                  className="w-full h-auto block mb-8 md:mb-12 lg:mb-20"
                  layout="fill"
                />
              )}
              <div className="lg:w-8/12">
                <h1 className="font-title mb-4 text-3xl md:text-4xl lg:text-6xl font-semibold">
                  {title}
                </h1>
                <Content content={content} />
              </div>
            </div>
          </Container>
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
  ${NavigationMenu.fragments.entry}
  query GetProfolioData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    service(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
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
