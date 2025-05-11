import { withAuth } from '@/components/hoc/withAuth';
import { PageTitle } from '@/components/seo/PageTitle';

function Dashboard() {
  return (
    <>
      <PageTitle
        title="Dashboard | Kamion"
        description="Manage your Kamion dashboard"
        canonical="https://admin.kamion.co/dashboard"
      />
      <div>
        <h1>Dashboard</h1>
        {/* Your dashboard content */}
      </div>
    </>
  );
}

export default withAuth(Dashboard);
