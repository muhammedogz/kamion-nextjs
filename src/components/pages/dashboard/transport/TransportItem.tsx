import React from 'react';
import { StatusType, TransportStatus } from './TransportStatus';
import { Typography } from '@/components/ui/typography';
import { TableCell, TableRow } from '@/components/ui/table';
import { Package } from 'lucide-react';

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
    <TableRow
      className="text-fg-primary h-22 cursor-pointer rounded-full bg-white hover:bg-white/70"
      onClick={() => onSelectionChange(id, !selected)}
    >
      <TableCell className="w-12 px-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onSelectionChange(id, e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </TableCell>
      <TableCell>
        <Typography variant="bodyXSmall">{id}</Typography>
      </TableCell>
      <TableCell>
        <Typography
          variant="bodyXSmall"
          className="inline-flex items-center gap-3"
        >
          <div className="bg-icon-bg flex size-10 items-center justify-center rounded-full p-1">
            <Package className="text-fg-icon size-4" />
          </div>
          {company}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="bodyXSmall">{route}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="bodyXSmall">{vehicle}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="bodyXSmall">{driver}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="bodyXSmall">{date}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="bodyXSmall">
          {price.toLocaleString('tr-TR')} ₺
        </Typography>
      </TableCell>
      <TableCell>
        <TransportStatus variant={status} />
      </TableCell>
    </TableRow>
  );
};

export default TransportItem;
