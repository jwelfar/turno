import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { IdFinderView } from "../views/IdFinderView";
import { TypeServiceView } from "../views/TypeServiceView";
import { GeneralServicesView } from "../views/GeneralServicesView";
import { PriorityServicesView } from "../views/PriorityServicesView";

export const AppRoutes = () => {
  const [info, setInfo] = useState([]);
  const [category, setCategory] = useState({});

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<IdFinderView info={info} setInfo={setInfo} />}
        />
        <Route
          exact
          path="/type-of-service"
          element={
            <TypeServiceView category={category} setCategory={setCategory} />
          }
        />
        <Route
          exact
          path="/general-service"
          element={<GeneralServicesView info={info} category={category} />}
        />
        <Route
          exact
          path="/priority-service"
          element={<PriorityServicesView info={info} category={category} />}
        />
      </Routes>
    </>
  );
};
