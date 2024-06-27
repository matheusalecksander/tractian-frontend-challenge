import "styled-components";
import { ITheme } from "../domain/interfaces/theme.interface";

declare module "styled-components" {
	export interface DefaultTheme extends ITheme {}
}
