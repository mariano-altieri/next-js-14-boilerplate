import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/app/commons/components/ui/card';
import { cn } from '@/app/commons/libs/utils';

import { ShoppingCardList } from './ShoppingCardList';

interface Props {
  className?: string;
}

export function ShoppingCard(props: Props) {
  const { className = '' } = props;
  const baseClass = cn('w-full', className);

  return (
    <Card className={baseClass}>
      <CardHeader>
        <CardTitle>Shopping Cart</CardTitle>
        <CardDescription>Your products</CardDescription>
      </CardHeader>
      <CardContent>
        <ShoppingCardList />
      </CardContent>
    </Card>
  );
}
