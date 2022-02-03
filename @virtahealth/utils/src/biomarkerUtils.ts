import { isEmpty, meanBy } from "lodash";
import {
  isAfter as isAfterDate,
  isBefore as isBeforeDate,
  isEqual as isEqualDate,
  max as maxDate,
} from "date-fns";

export interface ObservationValue {
  value: string;
}

export interface BiomarkerObservation {
  effective: string;
  value: ObservationValue;
}

export const getMostRecentBiomarker = (
  biomarkerObservations: BiomarkerObservation[]
) => {
  if (biomarkerObservations && !isEmpty(biomarkerObservations)) {
    const dates = biomarkerObservations.map(
      (observation) => new Date(observation.effective)
    );
    const mostRecentDate = maxDate(dates).toString();
    const mostRecentDateObservation = biomarkerObservations.filter(
      (observation) =>
        new Date(observation.effective).toString() === mostRecentDate
    )[0];

    return mostRecentDateObservation;
  }

  return null;
};

export const getBiomarkersInDateRange = (
  biomarkerObservations: BiomarkerObservation[],
  start: Date,
  end: Date = new Date()
) =>
  biomarkerObservations.filter((biomarkerObservation) => {
    const biomarkerDate = new Date(biomarkerObservation.effective);
    return (
      isEqualDate(start, biomarkerDate) ||
      isEqualDate(end, biomarkerDate) ||
      (isAfterDate(biomarkerDate, start) && isBeforeDate(biomarkerDate, end))
    );
  });

export const getAvgBiomarkerObservationValue = (
  biomarkerReadings: BiomarkerObservation[]
) =>
  meanBy(biomarkerReadings, (biomarkerObservation) =>
    Number(biomarkerObservation.value.value)
  );
