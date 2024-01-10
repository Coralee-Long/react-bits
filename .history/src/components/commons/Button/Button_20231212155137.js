import styles from './Button.module.css';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

const { "button-wrpper": buttonWrapper } = styles;
const Floor = () => {
  return (
    <div className={buttonWrrapper}>
      <button>Button</button>
    </div>
  );
};
export default Floor;
