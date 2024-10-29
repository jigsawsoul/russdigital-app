import Link from "next/link";

export default function PortfolioItem({ item }) {
  return (
    <div className="">
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
      <div className="pt-5 lg:pt-7">
        <h3 className="mb-2 lg:mb-4 font-title font-semibold text-2xl lg:text-4xl">
          <Link href={item.uri ?? ""}>
            <a>{item.title}</a>
          </Link>
        </h3>
        <ul className="inline-flex font-body lg:text-lg">
          {item.categories.nodes.map((category, index) => (
            <li
              key={category.name}
              className={`inline-block mr-1 ${
                index !== item.categories.nodes.length - 1
                  ? "after:content-['_/_']"
                  : ""
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
