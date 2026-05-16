import { Card } from '@/components';

const RegisterVehicle = () => {
  return (
    <div>
      <Card
        primaryButton={{
          text: 'View Details',
          variant: 'primary',
          callback: () => console.log('primary clicked'),
        }}
        secondaryButton={{
          text: 'Dismiss',
          variant: 'muted',
          callback: () => console.log('secondary clicked'),
        }}
      />

      <Card
        primaryButton={{
          text: 'View Details',
          variant: 'primary',
          callback: () => console.log('primary clicked'),
        }}
      />

      <Card />
    </div>
  );
};

export default RegisterVehicle;
