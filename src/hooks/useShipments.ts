import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { GetShipmentsParams, shipmentService } from '@/services/shipment';
import { setShipments } from '@/store/slices/shipmentSlice';

export const useShipments = (params?: GetShipmentsParams) => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['shipments', params],
    queryFn: async () => {
      const response = await shipmentService.getShipments(params);
      dispatch(setShipments(response.data));
      return response.data;
    },
  });
};
