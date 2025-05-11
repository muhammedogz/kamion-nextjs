import React from 'react';
import { Typography } from '@/components/ui/typography';
import { TableHeader, TableHead, TableRow } from '@/components/ui/table';

const TransportHeader: React.FC = () => {
  return (
    <TableHeader>
      <TableRow className="text-fg-tertiary">
        <TableHead className="w-12 px-4">
          <div />
        </TableHead>
        <TableHead className="w-20">
          <Typography
            variant="bodyXSmall"
            className="font-regular text-fg-tertiary"
          >
            ID
          </Typography>
        </TableHead>
        <TableHead className="w-48">
          <Typography
            variant="bodyXSmall"
            className="font-regular text-fg-tertiary"
          >
            FIRMA
          </Typography>
        </TableHead>
        <TableHead className="w-64">
          <Typography
            variant="bodyXSmall"
            className="font-regular text-fg-tertiary"
          >
            GÜZERGAH
          </Typography>
        </TableHead>
        <TableHead className="w-32">
          <Typography
            variant="bodyXSmall"
            className="font-regular text-fg-tertiary"
          >
            ARAC
          </Typography>
        </TableHead>
        <TableHead className="w-40">
          <Typography
            variant="bodyXSmall"
            className="font-regular text-fg-tertiary"
          >
            SÜRÜCÜ
          </Typography>
        </TableHead>
        <TableHead className="w-32">
          <Typography
            variant="bodyXSmall"
            className="font-regular text-fg-tertiary"
          >
            TARİH
          </Typography>
        </TableHead>
        <TableHead className="w-32">
          <Typography
            variant="bodyXSmall"
            className="font-regular text-fg-tertiary"
          >
            FİYAT
          </Typography>
        </TableHead>
        <TableHead className="w-32">
          <Typography
            variant="bodyXSmall"
            className="font-regular text-fg-tertiary"
          >
            DURUM
          </Typography>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TransportHeader;
