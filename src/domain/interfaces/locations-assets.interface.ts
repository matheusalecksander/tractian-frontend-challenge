import { AssetType } from "../enuns/asset-type.enum";

export interface ILocationAssets {
  id: string;
  name: string;
  type: AssetType;
  parentId?: string | null;
  locationId?: string | null;
  sensorType?: string | null;
  status?: string | null;
  childrens?: ILocationAssets[];
}