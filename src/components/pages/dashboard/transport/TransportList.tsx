import TransportItem from '@/components/pages/dashboard/transport/TransportItem';
import TransportHeader from '@/components/pages/dashboard/transport/TransportHeader';
import { StatusType } from '@/components/pages/dashboard/transport/TransportStatus';
import React, { useState } from 'react';
import { Table, TableBody } from '@/components/ui/table';
import { Typography } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

interface Transport {
  id: string;
  company: string;
  route: string;
  vehicle: string;
  driver: string;
  date: string;
  price: number;
  status: StatusType;
}

const testData: Transport[] = [
  {
    id: 'TR-001',
    company: 'ABC Transport Ltd.',
    route: 'İstanbul - Ankara',
    vehicle: '34ABC123',
    driver: 'Ahmet Yılmaz',
    date: '2024-03-20',
    price: 1500,
    status: 'completed',
  },
  {
    id: 'TR-002',
    company: 'XYZ Logistics',
    route: 'İzmir - Antalya',
    vehicle: '35XYZ789',
    driver: 'Mehmet Demir',
    date: '2024-03-21',
    price: 2000,
    status: 'inProgress',
  },
  {
    id: 'TR-003',
    company: 'Fast Cargo',
    route: 'Ankara - İstanbul',
    vehicle: '06FAST456',
    driver: 'Ayşe Kaya',
    date: '2024-03-22',
    price: 1800,
    status: 'pendingApproval',
  },
  {
    id: 'TR-004',
    company: 'Express Delivery',
    route: 'Bursa - İzmir',
    vehicle: '16EXP789',
    driver: 'Ali Öztürk',
    date: '2024-03-23',
    price: 1200,
    status: 'cancelled',
  },
];

export const TransportList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleSelectionChange = (id: string, selected: boolean) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (selected) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <Typography variant="h4" weight="regular" className="text-fg-primary">
          Taşımalarım
        </Typography>
        <Input
          endAdornment={<SearchIcon className="text-fg-primary" />}
          className="min-w-40 bg-white"
          placeholder="Arayın..."
        />
      </div>
      <Table className="border-separate border-spacing-y-1">
        <TransportHeader />
        <TableBody className="space-y-1">
          {testData.map((transport) => (
            <TransportItem
              key={transport.id}
              {...transport}
              selected={selectedItems.has(transport.id)}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
