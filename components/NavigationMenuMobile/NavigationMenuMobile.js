import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./NavigationMenuMobile.module.scss";
import { flatListToHierarchical } from "@faustwp/core";

let cx = classNames.bind(styles);

export default function NavigationMenuMobile({ menuItems, className }) {
  if (!menuItems) {
    return null;
  }

  // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data
  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  return (
    <nav
      className={cx(["component", className])}
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}
    >
      <ul className={cx(["menu", "font-title", "flex", "flex-col"])}>
        {hierarchicalMenuItems.map((item) => {
          const { id, path, label, children, cssClasses } = item;

          // @TODO - Remove guard clause after ghost menu items are no longer appended to array.
          if (!item.hasOwnProperty("__typename")) {
            return null;
          }

          return (
            <li key={id} className="font-semibold relative text-xl">
              <Link href={path ?? ""}>
                <a className="block py-2">{label ?? ""}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
