import styles from './Button.module.css';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

const { "butto": button } = styles;
const Floor = () => {
  return (
    <div className={button}>
      <button>Button</button>
    </div>
  );
};
export default Floor;
