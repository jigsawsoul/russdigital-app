import Link from "next/link";
import Image from "next/image";

export default function ServiceItem({ item, icon }) {
  return (
    <div className="bg-[#F6F5F3] py-10 px-9 font-body flex flex-col lg:flex-row gap-8 lg:gap-24 h-full">
      <div className="lg:order-2">
        <Image
          src={icon}
          className="min-w-10 min-h-10"
          width="40"
          height="40"
          alt="Service Icon"
        />
      </div>
      <div className="">
        <h2 className="mb-2 lg:mb-4 font-title font-semibold text-xl lg:text-2xl">
          <Link href={item.uri ?? ""}>
            <a>{item.title}</a>
          </Link>
        </h2>
        <div
          className="lg:text-lg mb-6"
          dangerouslySetInnerHTML={{ __html: item.excerpt }}
        ></div>
        <Link href={item.uri ?? ""}>
          <a className="inline-block font-title font-semibold text-sm border-b-2 border-black">
            VIEW DETAILS
          </a>
        </Link>
      </div>
    </div>
  );
}
