import { Dimensions } from 'react-native';

const DESIGN_WIDTH = 360;
const windowWidth = Dimensions.get('window').width;
export const ratio = windowWidth / DESIGN_WIDTH;
