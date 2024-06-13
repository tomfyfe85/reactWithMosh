interface Props {
  children: string;
  onClick: () => void;
  type?: "primary" | "secondary" | "danger";
}
const Button = ({ type = "primary", children, onClick }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
