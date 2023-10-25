import { useState } from "react";
import { MdFab, MdIcon } from "./material-web";
import styles from "./NaviRail.module.css";
import { PageKey } from "./types";
import { ColorSettingDialogs } from "./ColorSettingsDialog.component";

type Props = {
  current: PageKey;
  onChangePage: (key: PageKey) => void;
};
type Page = {
  key: PageKey;
  icon: string;
  label: string;
};
const pages: Page[] = [
  { key: "color", icon: "palette", label: "color" },
  { key: "component", icon: "add_circle", label: "component" },
];
export const NaviRail = ({ current, onChangePage }: Props) => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  return (
    <nav className={`nav-rail ${styles.navRail}`}>
      <MdFab variant="primary" onClick={() => setIsShowDialog(true)}>
        <MdIcon slot="icon">instant_mix</MdIcon>
      </MdFab>
      {isShowDialog ? (
        <ColorSettingDialogs onClose={() => setIsShowDialog(false)} />
      ) : (
        ""
      )}
      <ul className={styles.list}>
        {pages.map((page) => (
          <li
            key={page.key}
            className={styles.listItem}
            onClick={() => onChangePage(page.key)}
          >
            <MdIcon
              className={`${styles.icon} ${
                current === page.key ? styles.isActive : ""
              }`}
            >
              {page.icon}
            </MdIcon>
            <span className={styles.label}>{page.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
