# Sales Analytics Dashboard

A responsive sales analytics dashboard built using Next.js 15, TypeScript, Tailwind CSS, and Recharts.

## Features

- Sales data for 2022, 2023, and 2024
- Year filter
- Custom sales threshold filter
- Bar chart
- Line chart
- Pie chart
- Total sales
- Average monthly sales
- Highest monthly sales
- Monthly sales table
- Responsive design

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS
- React
- Recharts
- Node.js
- GitHub
- Vercel

## Project Structure

The project follows an atomic component structure:

- Atoms: Button, Input, Select
- Molecules: FilterBar, StatCard
- Organisms: SalesChart, SalesTable
- Dashboard: SalesDashboard

## Sales Data

The project uses an FMCG Daily Sales dataset covering 2022–2024.

The daily sales data is processed and converted into monthly sales.

Sales are calculated as:

Sales = Price per Unit × Units Sold

The data is provided through the Next.js API route:

/api/sales

## Filters

Users can select a year:

- 2022
- 2023
- 2024

Users can also enter their own sales threshold to filter the displayed months.

## Charts

The dashboard supports three chart types:

- Bar Chart
- Line Chart
- Pie Chart

Charts are created using Recharts.

## Installation

Clone the repository:

git clone https://github.com/bansalmehak691/sales-dashboard.git

Go to the project folder:

cd sales-dashboard

Install dependencies:

npm install

Start the development server:

npm run dev

Open:

http://localhost:3000

## Production Build

To create a production build:

npm run build

## GitHub Repository

https://github.com/bansalmehak691/sales-dashboard

## Live Website

https://sales-dashboard-three-psi.vercel.app

## What I Did

- Created a Next.js 15 project.
- Used TypeScript and Tailwind CSS.
- Created reusable components using atomic design principles.
- Added real sales dataset from Kaggle.
- Created an API route for the sales data.
- Added filters for year and sales threshold.
- Added Bar, Line, and Pie charts.
- Added sales statistics.
- Added a monthly sales table.
- Tested the project locally.
- Built and deployed the project using Vercel.
- Uploaded the project to GitHub.

## Author

Mehak Bansal