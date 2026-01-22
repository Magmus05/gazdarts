import "./ButtonStartGame.css";
type Props = {
    text: string;
    onClick: ()=> void;
}
export const ButtonStartGame = ({text, onClick}: Props) => {

  return (
    <button
      className="button-start"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
