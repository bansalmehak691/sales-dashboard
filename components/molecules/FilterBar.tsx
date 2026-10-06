"use client";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";

interface FilterBarProps {
  year: string;
  threshold: string;
  chartType: string;
  onYearChange: (value: string) => void;
  onThresholdChange: (value: string) => void;
  onChartTypeChange: (value: string) => void;
}

export default function FilterBar({
  year,
  threshold,
  chartType,
  onYearChange,
  onThresholdChange,
  onChartTypeChange,
}: FilterBarProps) {
  const yearOptions = [
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Year
          </label>

          <Select
            value={year}
            options={yearOptions}
            onChange={onYearChange}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Sales Threshold
          </label>

          <Input
            value={threshold}
            onChange={onThresholdChange}
            placeholder="Enter threshold"
            type="number"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Chart Type
          </label>

          <div className="flex gap-2">
            <Button
              active={chartType === "bar"}
              onClick={() => onChartTypeChange("bar")}
            >
              Bar
            </Button>

            <Button
              active={chartType === "line"}
              onClick={() => onChartTypeChange("line")}
            >
              Line
            </Button>

            <Button
              active={chartType === "pie"}
              onClick={() => onChartTypeChange("pie")}
            >
              Pie
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}