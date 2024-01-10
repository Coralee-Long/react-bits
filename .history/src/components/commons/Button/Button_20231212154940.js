import styles from './Button.module.css';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

const { button: button,  } = styles;
const Floor = () => {
  return (
    <div className={floor}>
      <div className={floorContainer}>
        <HeroBanner />
      </div>
    </div>
  );
};
export default Floor;
