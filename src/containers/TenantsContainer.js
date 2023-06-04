import { Container } from '@mui/material';
import TenantList from '../components/TenantList';
import LandlordDetails from '../components/LandlordDetails';
import styles from './styles.module.css';

const TenantsContainer = () => {
  return (
    <div className={styles.wrapper}>
      <Container maxWidth="md">
        {/* <LandlordDetails /> */}
        <TenantList />
      </Container>
    </div>
  );
};

export default TenantsContainer;
