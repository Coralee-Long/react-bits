import styles from './Floor.module.css';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

const { floor: floor, 'floor-container': floorContainer } = styles;
const Floor = () => {
  return (
    <div className={floor}>
      <div className={floorContainer}>
 
      </div>
    </div>
  );
};
export default Floor;
