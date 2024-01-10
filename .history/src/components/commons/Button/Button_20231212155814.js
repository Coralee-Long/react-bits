import styles from './Button.module.css';

const { 'button-wrpper': buttonWrapper } = styles;
const Button = () => {
  return (
    <div className={buttonWrapper}>
      <button>Button</button>
    </div>
  );
};
export default Button;
