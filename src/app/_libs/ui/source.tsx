import { ExternalLink } from 'lucide-react';
interface SourceProps {
  text: string;
  url: string;
  sourceName?: string;
}

export default function Source({
  text = 'Source',
  url,
  sourceName,
}: SourceProps) {
  return (
    <section className='flex gap-2 text-sm'>
      {text}
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className='text-zinc-500 font-semibold inline-flex items-center gap-1.5 underline'
      >
        {sourceName ?? url}
        <ExternalLink className='w-3 h-3' />
      </a>
    </section>
  );
}
