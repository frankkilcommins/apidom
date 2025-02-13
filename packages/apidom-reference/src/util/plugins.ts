import { invokeArgs } from 'ramda-adjunct';

import { File as IFile } from '../types';
import PluginError from '../errors/PluginError';

/**
 * Filters the given plugins, returning only the ones return `true` for the given method.
 */
export const filter = async (
  method: string,
  file: IFile,
  plugins: Array<any>,
): Promise<Array<any>> => {
  const pluginResults = await Promise.all(plugins.map(invokeArgs([method], [file])));
  return plugins.filter((plugin, index) => pluginResults[index]);
};

/**
 * Runs the specified method of the given plugins, in order,
 * until one of them returns a successful result.
 * Each method can return a synchronous value or a Promise.
 * If the promise resolves successfully then the result
 * is immediately returned and no further plugins are called.
 * If the promise rejects then the next plugin is called.
 * If ALL plugins fail, then the last error is thrown.
 */
export const run = async (method: string, parameters: any[], plugins: any[]): Promise<any> => {
  let lastError;

  for (const plugin of plugins) {
    try {
      // @ts-ignore
      const result = await plugin[method].call(plugin, ...parameters); // eslint-disable-line no-await-in-loop
      return { plugin, result };
    } catch (error: any) {
      lastError = new PluginError('Error while running plugin', { cause: error, plugin });
    }
  }

  return Promise.reject(lastError);
};
