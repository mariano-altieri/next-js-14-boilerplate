import Link from 'next/link';
import { RiNextjsFill } from 'react-icons/ri';

import { cn } from '../libs/utils';

interface Props {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const MainLogo = (props: Props) => {
  const { size = 30, showText = true, className = '' } = props;
  const baseClass = cn('flex items-center justify-center gap-2', className);

  return (
    <Link href="/" className={baseClass}>
      <RiNextjsFill size={size} />
      {showText && <span>Next JS 14 Boilerplate</span>}
    </Link>
  );
};
