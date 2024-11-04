import Link from "next/link";

export default function Button({
  children,
  className,
  link,
  onClick,
  ariaLabel = "Button",
}) {
  const defaultClasses =
    "inline-block font-title font-semibold text-sm px-10 py-[22px]";
  const combinedClasses = `${defaultClasses} ${className}`;

  if (link) {
    return (
      <Link href={link}>
        <a className={combinedClasses}>{children}</a>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      {...(onClick && { onClick })}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
