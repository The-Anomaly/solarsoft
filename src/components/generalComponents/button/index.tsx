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
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type, Icon, className, onClick, disabled }) => {
  return (
    <button
      className={`${styles.btn} ${styles[type]} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled}
    >
      {children} {Icon ? <Icon className={styles.icon} /> : ""}
    </button>
  );
};

export { Button };
