import { API } from 'homebridge';

import { PLUGIN_NAME } from './settings';
import {ComputerLanSwitch} from './platformAccessory';

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerAccessory(PLUGIN_NAME, ComputerLanSwitch);
};
