export interface IAsset {
  id: string;
  name: string;
  locationId: string;
  parentId?: string;
  sensorType?: string;
  status?: string
}