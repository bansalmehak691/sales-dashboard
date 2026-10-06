# Sales Analytics Dashboard

A responsive sales analytics dashboard built with **Next.js 15, TypeScript, Tailwind CSS, and Recharts**.

The application allows users to analyze sales data for **2022, 2023, and 2024** using interactive filters, statistics, charts, and a monthly sales table.

## Features

* Sales dashboard for 2022, 2023, and 2024
* Year selection filter
* Custom sales threshold filter
* Bar chart visualization
* Line chart visualization
* Pie chart visualization
* Total sales calculation
* Average monthly sales calculation
* Highest monthly sales calculation
* Monthly sales table
* Responsive UI
* Reusable component-based architecture
* Atomic design-inspired component structure
* TypeScript type safety

## Technologies Used

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Recharts
* Node.js
* npm

## Project Structure

```text
sales-dashboard/
│
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Select.tsx
│   │
│   ├── molecules/
│   │   ├── FilterBar.tsx
│   │   └── StatCard.tsx
│   │
│   ├── organisms/
│   │   ├── SalesChart.tsx
│   │   └── SalesTable.tsx
│   │
│   └── dashboard/
│       └── SalesDashboard.tsx
│
├── data/
│   └── sales.ts
│
├── types/
│   └── sales.ts
│
├── public/
│
├── package.json
└── README.md
```

## Atomic Component Structure

The project follows an atomic/component-based approach.

### Atoms

Small reusable UI elements such as:

* Button
* Input
* Select

### Molecules

Components created by combining atoms:

* FilterBar
* StatCard

### Organisms

Larger functional UI sections:

* SalesChart
* SalesTable

### Dashboard

The main dashboard component combines the reusable components and manages the application state.

## Sales Data

The project currently uses mock sales data for the years **2022, 2023, and 2024**.

The data contains monthly sales values and is stored in:

```text
data/sales.ts
```

The data can later be replaced with data retrieved from an external API or a Kaggle dataset.

## Filters

### Year Filter

Users can select:

* 2022
* 2023
* 2024

### Sales Threshold

Users can enter their own sales threshold.

For example:

```text
50000
```

The dashboard will display only months where sales are greater than or equal to the selected threshold.

## Chart Types

The dashboard supports three chart types:

* Bar Chart
* Line Chart
* Pie Chart

Charts are implemented using **Recharts**.

## Statistics

The dashboard calculates:

* Total Sales
* Average Monthly Sales
* Highest Sales
* Highest Sales Month

These values update when the selected year changes.

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd sales-dashboard
```

Install dependencies:

```bash
npm install
```

## Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

The homepage automatically redirects to:

```text
http://localhost:3000/dashboard
``
```
