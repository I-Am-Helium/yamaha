// To control the behavior of Storybook’s UI 
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
});