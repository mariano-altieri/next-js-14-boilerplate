import Link from 'next/link';
import { FaHeartBroken } from 'react-icons/fa';

import { Heading } from '@/app/commons/components/Heading';
import { Button } from '@/app/commons/components/ui/button';

interface Props {
  title?: string;
  description?: string;
  goBackUrl?: string;
  goBackLabel?: string;
}

export default function NotFound(props: Props) {
  const {
    title = 'Page Not Found',
    description = 'Oops! The page you are looking for does not exist.',
    goBackLabel = 'Return Home',
    goBackUrl = '/',
  } = props;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <FaHeartBroken size={70} className="mb-3" />
      <Heading>{title}</Heading>
      <p className="mb-6">{description}</p>
      <Button asChild>
        <Link href={goBackUrl}>{goBackLabel}</Link>
      </Button>
    </div>
  );
}
