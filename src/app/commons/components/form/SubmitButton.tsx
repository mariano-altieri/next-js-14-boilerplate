'use client';

import { cn } from '../../libs/utils';
import { Button } from '../ui/button';

interface Props {
  label?: string;
  onSubmitLabel?: string;
  submitting?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SubmitButton = (props: Props) => {
  const {
    label = 'save',
    onSubmitLabel = 'saving',
    submitting = false,
    disabled = false,
    className = '',
    onClick,
  } = props;

  const baseClass = cn('w-full', className);

  const handleClick = () => {
    typeof onClick === 'function' && onClick();
  };

  return (
    <Button
      className={baseClass}
      disabled={disabled || submitting}
      type="submit"
      onClick={handleClick}
    >
      {submitting ? <>{onSubmitLabel}</> : label}
    </Button>
  );
};
