import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const siteMapConfig = {
    hostname: 'https://charlesrburgundy.com/',
    dynamicRoutes: ['/about','/book-1','/book-2','/contact']
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Sitemap(siteMapConfig)],
    base: "/"
})
