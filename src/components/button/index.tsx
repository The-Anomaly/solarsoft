import * as React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  children: any;
  type: "dark" | "light" | "outline" | "transparent";
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, Icon, className, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${styles[type]} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children} {Icon ? <Icon className={styles.icon} /> : ""}
    </button>
  );
};

export { Button };
