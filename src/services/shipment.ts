import { API_ENDPOINTS } from '@/constants/api';
import { apiClient } from '@/lib/apiClient';
import { BaseApiResponse } from '@/types/api';
import { Shipment } from '@/types/services/shipment';

export interface GetShipmentsParams {
  filter?: {
    id?: string;
  };
}

export const shipmentService = {
  getShipments: async (
    params?: GetShipmentsParams
  ): Promise<BaseApiResponse<Shipment[]>> =>
    apiClient.get(API_ENDPOINTS.SHIPMENT.ROOT, { params }),
};
