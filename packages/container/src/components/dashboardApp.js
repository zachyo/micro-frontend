import { mount as mountAuth } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const DashboardApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mountAuth(ref.current);
  }, []);

  return <div className="" ref={ref}/>;
};

export default DashboardApp
