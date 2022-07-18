import * as React from "react";
import styles from "./styles.module.css";

export interface DropdownItem {
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  text: string;
  action: () => void;
  comingSoon?: boolean;
}

export interface DropdownProps {
  items: DropdownItem[];
  className: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, className }) => {
  return (
    <div className={`${styles.dropdownWrap} ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={styles.item} role="button" onClick={item.action}>
          {item.Icon ? <item.Icon className={styles.icon} /> : ""}
          <div>
            <div className={styles.nameWrap}>
              <p>{item.title}</p> {item.comingSoon ? <span className={styles.comingSoon}>Coming soon</span> : ""}
            </div>
            <p className={styles.txt2}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Dropdown };
