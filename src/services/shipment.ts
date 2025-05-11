import { API_ENDPOINTS } from '@/constants/api';
import { apiClient } from '@/lib/apiClient';
import { BaseApiResponse } from '@/types/api';
import { Shipment } from '@/types/services/shipment';

export const shipmentService = {
  getShipments: async (): Promise<BaseApiResponse<Shipment[]>> =>
    apiClient.get(API_ENDPOINTS.SHIPMENT.ROOT),
};
