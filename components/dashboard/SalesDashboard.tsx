"use client";

import { useMemo, useState } from "react";

import { salesData } from "@/data/sales";

import FilterBar from "@/components/molecules/FilterBar";
import StatCard from "@/components/molecules/StatCard";
import SalesChart from "@/components/organisms/SalesChart";
import SalesTable from "@/components/organisms/SalesTable";

export default function SalesDashboard() {
  const [year, setYear] = useState("2024");
  const [threshold, setThreshold] = useState("50000");
  const [chartType, setChartType] = useState("bar");

  const currentSales = salesData[Number(year)];

  const filteredSales = useMemo(() => {
    const thresholdValue = Number(threshold);

    if (!thresholdValue) {
      return currentSales;
    }

    return currentSales.filter(
      (item) => item.sales >= thresholdValue
    );
  }, [currentSales, threshold]);

  const totalSales = currentSales.reduce(
    (total, item) => total + item.sales,
    0
  );

  const averageSales = totalSales / currentSales.length;

  const highestSales = Math.max(
    ...currentSales.map((item) => item.sales)
  );

  const highestMonth = currentSales.find(
    (item) => item.sales === highestSales
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sales Analytics Dashboard
          </h1>

          <p className="mt-2 text-gray-600">
            Analyze sales performance for 2022, 2023 and 2024.
          </p>
        </div>

        <FilterBar
          year={year}
          threshold={threshold}
          chartType={chartType}
          onYearChange={setYear}
          onThresholdChange={setThreshold}
          onChartTypeChange={setChartType}
        />

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <StatCard
            title="Total Sales"
            value={`₹${totalSales.toLocaleString("en-IN")}`}
            description={`Total sales in ${year}`}
          />

          <StatCard
            title="Average Monthly Sales"
            value={`₹${Math.round(
              averageSales
            ).toLocaleString("en-IN")}`}
            description={`Average for ${year}`}
          />

          <StatCard
            title="Highest Sales"
            value={`₹${highestSales.toLocaleString("en-IN")}`}
            description={highestMonth?.month}
          />
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Sales Overview
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredSales.length} month(s) meet the selected threshold.
            </p>
          </div>

          <SalesChart
            data={filteredSales}
            chartType={chartType}
          />
          </div>

          <SalesTable data={filteredSales} />


        
      </div>
    </main>
  );
}