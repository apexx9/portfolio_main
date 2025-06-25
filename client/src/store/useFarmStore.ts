import { create } from 'zustand';
import { Device, DeviceMetrics, Alert, HistoricalData } from '../interfaces/farm';

interface FarmState {
  devices: Device[];
  currentDeviceId: string | null;
  metrics: Record<string, DeviceMetrics>;
  historicalData: Record<string, HistoricalData>;
  alerts: Alert[];
};

interface FarmActions {
  setCurrentDevice: (deviceId: string) => void;
  updateMetrics: (deviceId: string, metrics: Partial<DeviceMetrics>) => void;
  addAlert: (alert: Omit<Alert, 'id' | 'timestamp'>) => void;
  dismissAlert: (alertId: string) => void;
};

const useFarmStore = create<FarmState & FarmActions>((set) => ({
  devices: [
    {
      id: 'device-1',
      name: 'Greenhouse #1',
      farmer: 'John Doe',
      location: 'North Field',
      region: 'Central Valley',
      status: 'online',
      lastUpdated: new Date(),
    },
    {
        id: 'device-2',
        name: 'Greenhouse #1',
        farmer: 'Aaron Nartey',
        location: 'Tema',
        region: 'Greater Accra',
        status: 'online',
        lastUpdated: new Date(),
      },
      {
        id: 'device-3',
        name: 'Greenhouse #1',
        farmer: 'Maurice Elikem',
        location: 'Takoradi',
        region: 'Western',
        status: 'online',
        lastUpdated: new Date(),
      },
    // Add more devices...
  ],
  currentDeviceId: null,
  metrics: {},
  historicalData: {},
  alerts: [],
  
  setCurrentDevice: (deviceId) => set({ currentDeviceId: deviceId }),
  
  updateMetrics: (deviceId, metrics) => set((state) => {
    const currentMetrics = state.metrics[deviceId] || {};
    return {
      metrics: {
        ...state.metrics,
        [deviceId]: { ...currentMetrics, ...metrics },
      },
    };
  }),
  
  addAlert: (alert) => set((state) => ({
    alerts: [
      ...state.alerts,
      {
        ...alert,
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date(),
      },
    ],
  })),
  
  dismissAlert: (alertId) => set((state) => ({
    alerts: state.alerts.filter((alert) => alert.id !== alertId),
  })),
}));

export default useFarmStore;