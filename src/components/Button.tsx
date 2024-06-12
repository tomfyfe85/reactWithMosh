interface Props {
  type: "primary" | "secondary" | "danger";
  name: string;
  onClick: () => void;
}
const Button = ({ type = "primary", name, onClick }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + type} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default Button;
