import styles from "./Button.module.css";
type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className={`${styles.bg} font-markazi my-1 rounded-xl border-2 px-4 py-1 text-xl transition-all duration-300 hover:bg-white`}
    >
      {text}
    </button>
  );
};

export default Button;
