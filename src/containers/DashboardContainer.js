import AddRenter from '../components/AddRenter';
import Navbar from '../components/Navbar';

const DashboardContainer = () => {
  const mockRentData = [
    {
      id: 1,
      tenantName: 'John Doe',
      rentDueDate: '2023-06-01',
      rentPaid: false,
      nextReminder: '2023-05-25',
    },
    {
      id: 2,
      tenantName: 'Jane Smith',
      rentDueDate: '2023-06-15',
      rentPaid: false,
      nextReminder: '2023-06-10',
    },
    {
      id: 3,
      tenantName: 'Mike Johnson',
      rentDueDate: '2023-06-05',
      rentPaid: true,
      nextReminder: '2023-06-30',
    },
  ];

  return (
    <>
      <Navbar />
      <AddRenter rentData={mockRentData} />
    </>
  );
};

export default DashboardContainer;
