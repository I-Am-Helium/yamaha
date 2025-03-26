// To control the behavior of Storybook’s UI 
import { addons } from '@storybook/manager-api';
import yamahaTheme from './yamahaTheme';

addons.setConfig({
  theme: yamahaTheme,
});