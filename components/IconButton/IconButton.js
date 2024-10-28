import styles from "./IconButton.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

export default function IconButton({
  type = "button",
  onClick,
  ariaLabel,
  ariaControls,
  ariaExpanded,
  className,
  children,
  isScrolled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      className={cx("icon-button", { "is-scrolled": isScrolled }, className)}
    >
      {children}
    </button>
  );
}
