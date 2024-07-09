import classNames from "classnames";

export default function IconButton({
  type = "button",
  onClick,
  ariaLabel,
  ariaControls,
  ariaExpanded,
  className,
  children,
}) {
  const sharedStyles =
    "h-10 w-10 border-2 border-black flex flex-col rounded-full justify-center items-center gap-1";

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      className={classNames(sharedStyles, className)}
    >
      {children}
    </button>
  );
}
