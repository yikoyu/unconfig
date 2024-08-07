import type { PluginSpec } from 'semantic-release'

/**
 * Merge two object configurations based on the value of ovr.
 * @param {boolean | T} ovr - Whether to override, defaulting to the second object.
 * @param {T} defaultOpts - Default object configuration.
 * @returns {T | null} - Returns the merged object or null.
 */
export function mergeOptions<T>(ovr: boolean | T, defaultOpts: T): T | null {
  if (!ovr)
    return null

  if (typeof ovr === 'boolean')
    return ovr ? { ...defaultOpts } : null

  return { ...ovr, ...defaultOpts }
}

/**
 * Creates a plugin specification based on the provided parameters.
 * @param {string} pluginName - The name of the plugin.
 * @param {boolean | T} ovr - Whether to override, defaulting to the second object.
 * @param {T} defaultOpts - Default object configuration.
 * @returns {PluginSpec | null} - Returns the plugin specification or null if options are invalid.
 * @template T - The type of the plugin options.
 */
export function createPlugin<T>(pluginName: string, ovr: boolean | T, defaultOpts: T): PluginSpec | null {
  const options = mergeOptions<T>(ovr, defaultOpts)

  if (!options)
    return null

  if (!Object.keys(options).length)
    return pluginName

  return [pluginName, options]
}
