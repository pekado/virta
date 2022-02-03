import React from "react";
import { LabDataExperienceType } from "@virtahealth/experiences";

export const wrappedPatientLabDataEntry =
  (WrappedComponent) =>
  ({ currentView, setCurrentView, ...props }) => {
    [currentView, setCurrentView] = React.useState(LabDataExperienceType.Index);

    return (
      <WrappedComponent
        currentView={currentView}
        setCurrentView={setCurrentView}
        {...props}
      />
    );
  };
