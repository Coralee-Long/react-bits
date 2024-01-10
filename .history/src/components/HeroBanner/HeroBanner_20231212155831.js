import styles from './HeroBanner.module.css';
import Button from '../commons/Button/Button';

const { 'banner-container': bannerContainer } = styles;
const HeroBanner = () => {
  return (
    <div className={bannerContainer}>
      <<h1>Hero Banner</h1>>
    </div>
  );
};
export default HeroBanner;
