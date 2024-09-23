/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["i.ytimg.com","yt3.ggpht.com","lh3.googleusercontent.com"]
    },
    logging:{
        fetches: {
            fullUrl: true
        }
    }
}

module.exports = nextConfig
