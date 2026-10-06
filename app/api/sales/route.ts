import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface MonthlySales {
  month: string;
  sales: number;
}

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "FMCG_2022_2024.csv"
    );

    const file = fs.readFileSync(filePath, "utf-8");

    const rows = file.trim().split("\n");
    const headers = rows[0].split(",");

    const dateIndex = headers.indexOf("date");
    const priceIndex = headers.indexOf("price_unit");
    const unitsIndex = headers.indexOf("units_sold");

    const monthlySales: Record<string, number> = {};

    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i].split(",");

      const date = columns[dateIndex];
      const price = Number(columns[priceIndex]);
      const units = Number(columns[unitsIndex]);

      if (!date || Number.isNaN(price) || Number.isNaN(units)) {
        continue;
      }

      const year = date.substring(0, 4);

      if (!["2022", "2023", "2024"].includes(year)) {
        continue;
      }

      const month = date.substring(5, 7);
      const key = `${year}-${month}`;

      const sales = price * units;

      monthlySales[key] =
        (monthlySales[key] || 0) + sales;
    }

    const result: Record<number, MonthlySales[]> = {
      2022: [],
      2023: [],
      2024: [],
    };

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    for (const year of [2022, 2023, 2024]) {
      for (let month = 1; month <= 12; month++) {
        const key = `${year}-${String(month).padStart(2, "0")}`;

        result[year].push({
          month: monthNames[month - 1],
          sales: Math.round(monthlySales[key] || 0),
        });
      }
    }

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Failed to process sales data" },
      { status: 500 }
    );
  }
}