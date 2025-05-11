import TransportItem from '@/components/pages/dashboard/transport/TransportItem';
import TransportHeader from '@/components/pages/dashboard/transport/TransportHeader';
import React, { useState } from 'react';
import { Table, TableBody } from '@/components/ui/table';
import { Typography } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';
import { SearchIcon, TicketX } from 'lucide-react';
import { useShipments } from '@/hooks/useShipments';
import { useDebounce } from '@/hooks/base/useDebounce';

export const TransportList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(searchInput, 500);
  const { data, isLoading, error } = useShipments(
    debouncedSearch
      ? {
          filter: {
            id: debouncedSearch,
          },
        }
      : undefined
  );

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

  console.log('error', error);

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {error ? (
        <div className="flex h-40 items-center justify-center">
          <Typography
            variant="bodyBase"
            className="text-fg-cancelled text-center whitespace-pre-line"
          >
            {searchInput.length > 0 &&
              `Taşıma id: ${searchInput} aramasında sorun oluştu.`}
            {'\n'}
            Taşımalar yüklenemedi. Lütfen daha sonra tekrar deneyiniz.
          </Typography>
        </div>
      ) : isLoading ? (
        <div className="flex h-40 items-center justify-center">
          <Typography variant="bodyBase">Taşımalar yükleniyor...</Typography>
        </div>
      ) : shipments.length === 0 ? (
        <div className="flex h-40 flex-col items-center justify-center">
          <Typography variant="bodyLarge">Taşımalar bulunamadı.</Typography>
          <TicketX className="text-fg-primary size-10" />
        </div>
      ) : (
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
      )}
    </div>
  );
};
