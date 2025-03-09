/** The name of the current javascript runtime environment */
export const runtimeEnvironment = (() => {
    if (
        typeof globalThis.Bun === 'object' &&
        typeof Bun.version === 'string'
    ) return 'bun'

    else if (
        typeof globalThis.Deno === 'object' &&
        typeof Deno.version === 'object' &&
        typeof Deno.version.deno === 'string'
    ) return 'deno'

    else if (
        typeof globalThis.process === 'object' &&
        typeof process.version === 'string'
    ) return 'node'

    else if (typeof globalThis.navigator === 'object' &&
        typeof navigator.userAgent === 'string'
    ) return 'browser'

    else return 'unknown'
})()