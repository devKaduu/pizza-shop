import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4"></div>
      </div>
    </>
  );
};

export default Dashboard;
