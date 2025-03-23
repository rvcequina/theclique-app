import React from "react";

// components

import CardPatients from "components/Cards/CardPatients";

export default function PatientList() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            patient list
        </div>
        <div className="w-full mb-12 px-4">
          <CardPatients  />
        </div>
      </div>
    </>
  );
}
