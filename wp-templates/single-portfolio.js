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
  SlickSlider,
  Container,
  Content,
} from "../components";

export default function Component(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, content, gallery, categories, tags, seo } = props?.data
    ?.portfolio ?? {
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
            <div className="py-10 lg-py-14 xl:py-28">
              {gallery.gallery?.nodes.length > 0 && (
                <SlickSlider gallery={gallery} />
              )}
              <div className="py-10 flex flex-col lg:flex-row justify-between flex-wrap">
                <div className="col-lg-8 lg:w-8/12">
                  <h1 className="font-title mb-4 text-3xl md:text-4xl lg:text-6xl font-semibold">
                    {title}
                  </h1>
                  <Content content={content} />
                </div>
                <div className="lg:w-4/12 xl:w-3/12">
                  <dl>
                    {categories.nodes.length > 0 && (
                      <>
                        <dt className="text-lg mb-1">Service:</dt>
                        <dd className="font-title font-semibold mb-8">
                          {categories.nodes.map((category, index) => (
                            <span
                              className={`uppercase ${
                                index !== categories.nodes.length - 1
                                  ? "after:content-[',_']"
                                  : ""
                              }`}
                            >
                              {category.name}
                            </span>
                          ))}
                        </dd>
                      </>
                    )}
                    {tags.nodes.length > 0 && (
                      <>
                        <dt className="text-lg mb-1">Software:</dt>
                        <dd className="font-title font-semibold mb-8">
                          {tags.nodes.map((tag, index) => (
                            <span
                              className={`uppercase ${
                                index !== tags.nodes.length - 1
                                  ? "after:content-[',_']"
                                  : ""
                              }`}
                            >
                              {tag.name}
                            </span>
                          ))}
                        </dd>
                      </>
                    )}
                  </dl>
                </div>
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
    portfolio(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      gallery {
        gallery {
          nodes {
            altText
            sourceUrl
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
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
