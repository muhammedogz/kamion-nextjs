import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const transportStatusVariants = cva(
  'h-9 w-30 px-4 py-3.5 rounded-full flex items-center justify-center text-[10px] text-center',
  {
    variants: {
      variant: {
        completed: 'bg-bg-success text-fg-success',
        inProgress: 'bg-bg-inProgress/10 text-fg-inProgress',
        cancelled: 'bg-bg-cancelled text-fg-cancelled',
        pendingApproval: 'bg-bg-pendingApproval text-fg-pendingApproval',
      },
    },
    defaultVariants: {
      variant: 'completed',
    },
  }
);

const statusTextMap = {
  completed: 'Tamamlandı',
  inProgress: 'Tedarik Sürecinde',
  cancelled: 'İptal Edildi',
  pendingApproval: 'Onay Bekliyor',
} as const;

type TransportStatusProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof transportStatusVariants>;

export type TransportStatusType = VariantProps<
  typeof transportStatusVariants
>['variant'];

export const TransportStatus = ({
  variant = 'completed',
  className,
  ...props
}: TransportStatusProps) => {
  return (
    <div
      className={cn(transportStatusVariants({ variant }), className)}
      {...props}
    >
      {statusTextMap[variant as keyof typeof statusTextMap]}
    </div>
  );
};
