import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Shipment } from '@/types/services/shipment';

interface ShipmentState {
  shipments: Shipment[];
}

const initialState: ShipmentState = {
  shipments: [],
};

const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    setShipments: (state, action: PayloadAction<Shipment[]>) => {
      state.shipments = action.payload;
    },
  },
});

export const { setShipments } = shipmentSlice.actions;
export default shipmentSlice.reducer;
