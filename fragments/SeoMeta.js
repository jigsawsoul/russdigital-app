import { gql } from "@apollo/client";

export const SeoMetaFragment = gql`
  fragment SeoMetaFragment on PostTypeSEO {
    canonical
    cornerstone
    focuskw
    metaDesc
    metaKeywords
    metaRobotsNofollow
    metaRobotsNoindex
    opengraphAuthor
    opengraphDescription
    opengraphModifiedTime
    opengraphPublishedTime
    opengraphPublisher
    opengraphSiteName
    opengraphTitle
    opengraphType
    opengraphUrl
    readingTime
    title
    twitterDescription
    twitterTitle
    breadcrumbs {
      url
      text
    }
  }
`;
