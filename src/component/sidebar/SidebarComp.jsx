import React from "react";
import { Placeholder } from "react-bootstrap";

const SidebarComp = () => {
  return (
    <div className="pa-3">
      <h2 className="text-center mt-3">Welcome to Manageify</h2>
      <p className="text-center">Manageify is a simple webApp for help you to manage your job and time better than before.Thank you for using us</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p aria-hidden="true" className="ms-2 me-2">
        <Placeholder xs={12} className="mb-3" />
        <Placeholder xs={12} className="mb-3" />
        <Placeholder xs={12} className="mb-3" />
        <Placeholder xs={12} className="mb-3" />
        <Placeholder xs={12} className="mb-3" />
      </p>

      <Placeholder.Button xs={4} aria-hidden="true" className="ms-2 mb-3" />
    </div>
  );
};

export default SidebarComp;
