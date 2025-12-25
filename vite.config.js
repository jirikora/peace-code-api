import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            formats: ['cjs', 'es'],
            entry: 'src/index.ts',
            name: 'PeaceCodeAPI',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [], // add external deps here, e.g. ['react']
            output: {
                globals: {
                    // 'react': 'React'
                },
            },
        },
    },
    plugins: [dts({ insertTypesEntry: true })],
});
