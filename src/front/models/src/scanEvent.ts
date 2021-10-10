import Unit from "./unit";

class ScanEvent {
  id: string;
  timezone: string;
  latitude: number;
  longitude: number;
  passed: boolean;
  unit: Unit;

  constructor(
    id: string,
    timezone: string,
    latitude: number,
    longitude: number,
    passed: boolean,
    unit: Unit,
  ) {
    this.id = id;
    this.timezone = timezone;
    this.latitude = latitude;
    this.longitude = longitude;
    this.passed = passed;
    this.unit = unit;
  }
}

export default ScanEvent;
