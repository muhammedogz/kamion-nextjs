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
        <TableHead>
          <Typography variant="bodyXSmall" className="font-regular">
            ID
          </Typography>
        </TableHead>
        <TableHead>
          <Typography variant="bodyXSmall" className="font-regular">
            FIRMA
          </Typography>
        </TableHead>
        <TableHead>
          <Typography variant="bodyXSmall" className="font-regular">
            GÜZERGAH
          </Typography>
        </TableHead>
        <TableHead>
          <Typography variant="bodyXSmall" className="font-regular">
            ARAC
          </Typography>
        </TableHead>
        <TableHead>
          <Typography variant="bodyXSmall" className="font-regular">
            SÜRÜCÜ
          </Typography>
        </TableHead>
        <TableHead>
          <Typography variant="bodyXSmall" className="font-regular">
            TARİH
          </Typography>
        </TableHead>
        <TableHead>
          <Typography variant="bodyXSmall" className="font-regular">
            FIYAT
          </Typography>
        </TableHead>
        <TableHead>
          <Typography variant="bodyXSmall" className="font-regular">
            DURUM
          </Typography>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TransportHeader;
