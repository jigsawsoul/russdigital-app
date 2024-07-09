import React from "react";
import { gql } from "@apollo/client";
import Link from "next/link";

export default function Breadcrumbs({ items }) {
  // Modify URLs by removing the specified part
  const modifiedItems = items?.map((item) => ({
    ...item,
    url: item.url.replace("https://api.russdigital.co.uk", ""),
  }));

  return (
    <div className="bg-[#F6F5F3] py-6 lg:py-9 px-4 lg:px-10 w-full">
      <nav
        aria-label="breadcrumb"
        className="flex flex-wrap items-center gap-x-3 text-lg"
      >
        {modifiedItems?.map((item, index) => (
          <React.Fragment key={index}>
            <span property="itemListElement" typeof="ListItem">
              <Link href={item.url}>
                <a property="item" typeof="WebPage" title="Go to {item.text}.">
                  <span
                    property="name"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></span>
                </a>
              </Link>
              <meta property="position" content={index + 1}></meta>
            </span>
            {index < modifiedItems.length - 1 && <span>&rsaquo;</span>}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}

Breadcrumbs.fragments = {
  entry: gql`
    fragment BreadcrumbsFragment on PostTypeSEO {
      breadcrumbs {
        text
        url
      }
    }
  `,
};
