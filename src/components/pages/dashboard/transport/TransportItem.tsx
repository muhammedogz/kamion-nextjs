import React from 'react';
import { StatusType, TransportStatus } from './TransportStatus';
import { Typography } from '@/components/ui/typography';

interface TransportItemProps {
  id: string;
  company: string;
  route: string;
  vehicle: string;
  driver: string;
  date: string;
  price: number;
  status: StatusType;
  selected: boolean;
  onSelectionChange: (id: string, selected: boolean) => void;
}

const TransportItem: React.FC<TransportItemProps> = ({
  id,
  company,
  route,
  vehicle,
  driver,
  date,
  price,
  status,
  selected,
  onSelectionChange,
}) => {
  return (
    <div
      className="flex items-center rounded-xl bg-white p-4 hover:bg-white/70"
      onClick={() => onSelectionChange(id, !selected)}
    >
      <div className="flex w-full items-center">
        <div className="text-fg-primary ml-4 grid w-full grid-cols-9 items-center gap-4">
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => onSelectionChange(id, e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <Typography variant="bodyXSmall">{id}</Typography>
          <Typography variant="bodyXSmall">{company}</Typography>
          <Typography variant="bodyXSmall">{route}</Typography>
          <Typography variant="bodyXSmall">{vehicle}</Typography>
          <Typography variant="bodyXSmall">{driver}</Typography>
          <Typography variant="bodyXSmall">{date}</Typography>
          <Typography variant="bodyXSmall">
            {price.toLocaleString('tr-TR')} ₺
          </Typography>
          <TransportStatus variant={status} />
        </div>
      </div>
    </div>
  );
};

export default TransportItem;
