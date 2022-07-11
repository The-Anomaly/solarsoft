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
  action: () => void
}

export interface DropdownProps {
  items: DropdownItem[];
  className: string
}

const Dropdown: React.FC<DropdownProps> = ({ items, className }) => {
  return (
    <div className={`${styles.dropdownWrap} ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={styles.item} role="button" onClick={item.action} >
          {item.Icon ? <item.Icon className={styles.icon} /> : ""}
          <div>
            <p>{item.title}</p>
            <p className={styles.txt2}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Dropdown };
