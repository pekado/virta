import { MessageDescriptor } from "react-intl";

export const en = {
  syncMeter: "Sync meter",
  meterSyncing: "Meter syncing",
};

export const es = {
  syncMeter: "Sync meter",
  meterSyncing: "Meter syncing",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  syncMeter: {
    id: "syncMeter",
    defaultMessage: en.syncMeter,
    description: "Used in PA iOS for Virta Meter syncing",
  },
  meterSyncing: {
    id: "meterSyncing",
    defaultMessage: en.meterSyncing,
    description: "Used in PA iOS for Virta Meter syncing",
  },
};
