import { Container } from '@mui/material';
import TenantList from '../components/TenantList';
import LandlordDetails from '../components/LandlordDetails';
import styles from './styles.module.css';
import PropertyList from '../components/PropertyList';

const PropertiesContainer = () => {
  return (
    <div className={styles.wrapper}>
      <Container maxWidth="md">
        {/* <LandlordDetails /> */}
        <PropertyList />
      </Container>
    </div>
  );
};

export default PropertiesContainer;
