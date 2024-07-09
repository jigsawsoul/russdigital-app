import Link from "next/link";

export default function PortfolioItem({ item }) {
  return (
    <div className="wow animated bounceInUp">
      <Link href={item.uri ?? ""}>
        <a className="block">
          {item.featuredImage && item.featuredImage.node && (
            <img
              src={item.featuredImage.node.sourceUrl}
              alt={item.featuredImage.node.altText || item.title}
              className="w-full h-auto block"
            />
          )}
        </a>
      </Link>
      <div className="pt-5lg:pt-7">
        <h3 className="mb-2 lg:mb-4 font-title font-semibold text-2xl lg:text-4xl">
          <Link href={item.uri ?? ""}>
            <a>{item.title}</a>
          </Link>
        </h3>
        <ul className="inline-flex font-body lg:text-lg">
          <li className="inline-block mr-1 after:content-['_/_']">Branding</li>
          <li className="inline-block mr-1 after:content-['_/_']">
            Development
          </li>
          <li className="inline-block mr-1">Concept</li>
        </ul>
      </div>
    </div>
  );
}
