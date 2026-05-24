import TextCustom from '../TextCustom';

type AdminSidePanelProps = {
  title: string;
  description: string;
  bullets: string[];
};

const AdminSidePanel = ({ title, description, bullets }: AdminSidePanelProps) => (
  <div className='hidden md:flex flex-col justify-center px-16 lg:px-24 py-16 bg-steel-800 md:w-5/12 lg:w-1/2'>
    <div className='max-w-sm'>
      <TextCustom
        variant='small'
        text='Fleet Management'
        className='text-steel-400 uppercase mb-4'
      />
      <TextCustom variant='heading' text={title} className='text-steel-100 mb-4' />
      <TextCustom variant='regular' text={description} className='text-steel-400 mb-10' />
      <div className='flex flex-col gap-4'>
        {bullets.map((item) => (
          <div key={item} className='flex items-start gap-3'>
            <span className='mt-0.5 w-1.5 h-1.5 rounded-full bg-periwinkle-400 shrink-0' />
            <TextCustom variant='small' text={item} className='text-steel-400' />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AdminSidePanel;
