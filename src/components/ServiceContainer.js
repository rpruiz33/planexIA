import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ServiceList from './ServiceList';
import ServiceDetail from './ServiceDetail';

const ServiceContainer = () => {
  const location = useLocation();
  const [showDetail, setShowDetail] = useState(location.pathname.includes('/service'));

  const handleDetailClose = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/service/*"
          element={<ServiceDetail onClose={handleDetailClose} />}
        />
      </Routes>
      {!showDetail && <ServiceList />}
    </div>
  );
};

export default ServiceContainer;
