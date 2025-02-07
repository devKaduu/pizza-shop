import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrdersAmoutCard } from "./month-orders-amout-card";
import { DayOrdersAmoutCard } from "./day-orders-amout-card";
import { MonthCanceledOrdersAmoutCard } from "./month-canceled-orders-amount-card";

const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmoutCard />
          <DayOrdersAmoutCard />
          <MonthCanceledOrdersAmoutCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
