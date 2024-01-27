import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../components/admin/AdminHome";
import AdminVehicles from "../components/admin/AdminVehicles";
import AdminLayout from "../layouts/AdminLayout";
import useStore from "../utils/store";

type Props = {};

const Admin = (props: Props) => {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <AdminLayout>
        {/* {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button> */}
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/vehicles" element={<AdminVehicles />} />
        </Routes>
      </AdminLayout>
    </div>
  );
};

export default Admin;
