import React from 'react';
import { TransportStatusType, TransportStatus } from './TransportStatus';
import { Typography, typographyVariants } from '@/components/ui/typography';
import { TableCell, TableRow } from '@/components/ui/table';
import { Package, Truck, User } from 'lucide-react';
import { Shipment } from '@/types/services/shipment';

interface TransportItemIconProps {
  children: React.ReactNode;
}

const TransportItemIcon: React.FC<TransportItemIconProps> = ({ children }) => (
  <span className="bg-icon-bg flex size-10 items-center justify-center rounded-full p-1">
    {children}
  </span>
);

const convertApiStatusToUiStatus = (status: number): TransportStatusType => {
  return status === 0
    ? 'pendingApproval'
    : status === 1
      ? 'inProgress'
      : status === 11
        ? 'completed'
        : 'cancelled';
};

interface TransportItemProps {
  shipment: Shipment;
  selected: boolean;
  onSelectionChange: (id: string, selected: boolean) => void;
}

const TransportItem: React.FC<TransportItemProps> = ({
  shipment,
  selected,
  onSelectionChange,
}) => {
  return (
    <TableRow
      className="text-fg-primary h-22 cursor-pointer rounded-full bg-white hover:bg-white/70"
      onClick={() => onSelectionChange(shipment.id.toString(), !selected)}
    >
      <TableCell className="w-12 px-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) =>
            onSelectionChange(shipment.id.toString(), e.target.checked)
          }
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </TableCell>
      <TableCell className="w-20">
        <Typography variant="bodyXSmall">{shipment.id}</Typography>
      </TableCell>
      <TableCell className="w-48">
        <Typography
          variant="bodyXSmall"
          className="inline-flex items-center gap-3"
        >
          <TransportItemIcon>
            <Package className="text-fg-icon size-4" />
          </TransportItemIcon>
          {shipment.shipper?.name}
        </Typography>
      </TableCell>
      <TableCell className="w-64">
        <Typography className="flex flex-col gap-1" variant="bodyXSmall">
          <span className="inline-flex items-center gap-1">
            <span className="bg-bg-primary block size-2.5 rounded-full" />
            <span
              className={typographyVariants({
                variant: 'bodyXSmall',
                weight: 'medium',
              })}
            >
              Ofis,
            </span>
            {shipment.departure_address.city.name}
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="border-border-checkbox block size-2.5 rounded-full border" />{' '}
            <span
              className={typographyVariants({
                variant: 'bodyXSmall',
                weight: 'medium',
              })}
            >
              Fabrika,
            </span>
            {shipment.delivery_address.city.name}
          </span>
        </Typography>
      </TableCell>
      <TableCell className="w-32">
        <Typography
          variant="bodyXSmall"
          className="inline-flex items-center gap-3"
        >
          <TransportItemIcon>
            <Truck className="text-fg-primary size-4" />
          </TransportItemIcon>
          <span className="flex flex-col gap-1">
            {shipment.vehicle?.plate}
            <span className="text-border-input">
              {shipment.vehicle?.type_value}
            </span>
          </span>
        </Typography>
      </TableCell>
      <TableCell className="w-40">
        <Typography
          variant="bodyXSmall"
          className="inline-flex items-center gap-3"
        >
          <TransportItemIcon>
            <User className="text-fg-primary size-4" />
          </TransportItemIcon>
          <p className="flex flex-col gap-1">
            <span className="text-fg-primary">
              {shipment.driver?.name} {shipment.driver?.surname}
            </span>
            <span className="text-border-input">{shipment.driver?.phone}</span>
          </p>
        </Typography>
      </TableCell>
      <TableCell className="w-32">
        <Typography variant="bodyXSmall">
          {new Date(shipment.pick_up_date).toLocaleDateString('tr-TR')}
        </Typography>
      </TableCell>
      <TableCell className="w-32">
        <Typography variant="bodyXSmall">
          {shipment.price?.carrier?.carrier_price} ₺
        </Typography>
      </TableCell>
      <TableCell className="w-32">
        <TransportStatus
          variant={convertApiStatusToUiStatus(shipment.latest_status.type)}
        />
      </TableCell>
    </TableRow>
  );
};

export default TransportItem;
