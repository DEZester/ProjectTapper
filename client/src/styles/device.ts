import {DeviceSizes} from "@/types/types.ts";
import sizes from "@/styles/sizes.ts";

const device: DeviceSizes = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
  large: `(max-width: ${sizes.large})`
}

export default device;