// Type check and minify
await Bun.build({
    entrypoints: ['./index.js'],
    outdir: './',
    naming: 'runtimeEnvironment.[ext]',
    minify: true,
})