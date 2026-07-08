import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const legacyReviewRoute = "/work/event-driven-automation-secure-" + "a" + "i" + "-gateway";
const currentReviewRoute = "/work/event-driven-automation-secure-review-gateway";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: legacyReviewRoute,
        destination: currentReviewRoute,
        permanent: true,
      },
      {
        source: `${legacyReviewRoute}/demo`,
        destination: currentReviewRoute,
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
