export interface Device {
    id: string;
    name: string;
    farmer: string;
    location: string;
    region: string;
    status: 'online' | 'offline';
    lastUpdated: Date;
  };
  
  export interface DeviceMetrics {
    wifiSignal: number; // percentage
    batteryLevel: number; // percentage
    temperature: number; // °C
    humidity: number; // percentage
    soilMoisture: number; // percentage
    lightIntensity: number; // lux
    co2Level: number; // ppm
  };
  
  export interface Alert {
    id: string;
    deviceId: string;
    metric: keyof DeviceMetrics;
    value: number;
    threshold: 'high' | 'low';
    message: string;
    timestamp: Date;
  };
  
  export interface HistoricalData {
    timestamp: Date;
    value: number;
  }[];