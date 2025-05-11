import AnnouncementBanner from '@/components/campaign/AnnouncementBanner';
import { withAuth } from '@/components/hoc/withAuth';
import { Header } from '@/components/pages/dashboard/header';
import { Typography, typographyVariants } from '@/components/ui/typography';
import { PageTitle } from '@/components/seo/PageTitle';
import { cn } from '@/lib/utils';

function Dashboard() {
  return (
    <>
      <PageTitle
        title="Dashboard | Kamion"
        description="Manage your Kamion dashboard"
        canonical="https://admin.kamion.co/dashboard"
      />
      <div className="bg-bg-dashboard flex h-screen flex-col gap-4">
        <Header />
        <div className="container mx-auto max-w-[1250px]">
          <AnnouncementBanner>
            <Typography
              variant="bodySmall"
              weight="light"
              className="text-fg-announcement"
            >
              <span
                className={cn(
                  typographyVariants({
                    variant: 'bodySmall',
                    weight: 'medium',
                    className: 'text-fg-primary',
                  })
                )}
              >
                Kamion Duyuru
              </span>{' '}
              Güncellendi. Hemen İndirerek, Fırsatları Yakalayabilirsiniz.
            </Typography>
          </AnnouncementBanner>
        </div>
        {/* Your dashboard content */}
      </div>
    </>
  );
}

export default withAuth(Dashboard);
