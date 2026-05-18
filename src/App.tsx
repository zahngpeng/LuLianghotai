import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminTemplates from "./pages/admin/AdminTemplates";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProcurements from "./pages/admin/AdminProcurements";
import AdminLogistics from "./pages/admin/AdminLogistics";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminFinance from "./pages/admin/AdminFinance";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="templates" element={<AdminTemplates />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="procurements" element={<AdminProcurements />} />
          <Route path="logistics" element={<AdminLogistics />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="finance" element={<AdminFinance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
