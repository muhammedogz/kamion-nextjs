import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { shipmentService } from '@/services/shipment';
import { setShipments } from '@/store/slices/shipmentSlice';

export const useShipments = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['shipments'],
    queryFn: async () => {
      const response = await shipmentService.getShipments();
      dispatch(setShipments(response.data));
      return response.data;
    },
    // enabled: false,
  });
};
