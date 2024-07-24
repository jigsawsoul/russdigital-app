import Link from "next/link";

export default function ServiceItem({ item, icon }) {
  return (
    <div className="bg-[#F6F5F3] py-10 px-9 font-body flex gap-24">
      <div className="lg:order-2">
        <img src={icon} className="min-w-10 min-h-10"></img>
      </div>
      <div className="">
        <h2 className="mb-2 lg:mb-4 font-title font-semibold text-2xl">
          <Link href={item.uri ?? ""}>
            <a>{item.title}</a>
          </Link>
        </h2>
        <p className="text-lg mb-6">
          Good website tells a story that will make users fully immerse
          themselves operating
        </p>
        <Link href={item.uri ?? ""}>
          <a className="inline-block font-title font-semibold text-sm border-b-2 border-black">
            VIEW DETAILS
          </a>
        </Link>
      </div>
    </div>
  );
}
