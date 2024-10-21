import Image from "next/image";

export default function Logo({ isScrolled }) {
  return (
    <Image
      src={
        isScrolled
          ? "https://api.russdigital.co.uk/wp-content/uploads/2024/10/logo.svg"
          : "https://api.russdigital.co.uk/wp-content/uploads/2024/10/logo-white.svg"
      }
      alt="Russ Digital"
      width="191"
      height="30"
    />
  );
}
