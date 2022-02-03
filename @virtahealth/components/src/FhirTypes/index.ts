// We're doing some funky things with some FHIR resources, here's a place to store them for the moment

export type VirtaObservation = Omit<fhir.Observation, "related"> & {
  hasMember?: VirtaObservation[];
  related?: fhir.Observation[];
  value?: number | string;
  unit?: string;
};

export type VirtaDiagnosticReport = Omit<fhir.DiagnosticReport, "result"> & {
  result: VirtaObservation[];
};
