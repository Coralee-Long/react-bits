import styles from './HeroBanner.module.css';

const { 'banner-container': bannerContainer } = styles;
const HeroBanner = () => {
  return (
    <div className={bannerContainer}>
      <h1>Hero Banner</h1>
    </div>
  );
};
export default HeroBanner;
