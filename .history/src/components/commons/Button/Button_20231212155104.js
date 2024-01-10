import styles from './Button.module.css';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

const { "button-main": button } = styles;
const Floor = () => {
  return (
    <div className={button}>
      <button>Button</button>
    </div>
  );
};
export default Floor;
