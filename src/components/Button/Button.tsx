import styles from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <>
      <button
        type="button"
        className={[styles.btn, styles.btnPrimary].join(" ")}
        onClick={onClick}
      >
        {children} 
      </button>
    </>
  );
};

export default Button;
