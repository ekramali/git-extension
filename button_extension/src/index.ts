import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {ButtonExtension} from "./button";

/**
 * Initialization data for the mybutton extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'mybutton:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension mybutton is activated!');

    let buttonExtension = new ButtonExtension();
    app.docRegistry.addWidgetExtension('Notebook', buttonExtension);
  }
};

export default plugin;
