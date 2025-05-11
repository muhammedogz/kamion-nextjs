import TransportItem from '@/components/pages/dashboard/transport/TransportItem';
import TransportHeader from '@/components/pages/dashboard/transport/TransportHeader';
import React, { useState } from 'react';
import { Table, TableBody } from '@/components/ui/table';
import { Typography } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useShipments } from '@/hooks/useShipments';

export const TransportList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const { data, isLoading, error } = useShipments();

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

  if (isLoading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Typography variant="bodyBase">Taşımalar yükleniyor...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Typography variant="bodyBase" className="text-fg-cancelled">
          Taşımalar yüklenemedi. Lütfen daha sonra tekrar deneyiniz.
        </Typography>
      </div>
    );
  }

  const shipments = data || [];

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
      <div className="relative">
        <Table className="border-separate border-spacing-y-1">
          <TransportHeader />
        </Table>
        <div className="[&::-webkit-scrollbar-thumb]:bg-bg-primary/60 hover:[&::-webkit-scrollbar-thumb]:bg-bg-primary/30 max-h-[calc(100vh-300px)] overflow-y-auto [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          <Table className="border-separate border-spacing-y-1">
            <TableBody className="space-y-1">
              {shipments.map((shipment) => (
                <TransportItem
                  key={shipment.id}
                  shipment={shipment}
                  selected={selectedItems.has(shipment.id.toString())}
                  onSelectionChange={handleSelectionChange}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
