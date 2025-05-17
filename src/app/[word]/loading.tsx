import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className='flex w-full items-center justify-center'>
      <LoaderCircle size={28} className='animate-spin text-purple-500' />
    </div>
  );
}
