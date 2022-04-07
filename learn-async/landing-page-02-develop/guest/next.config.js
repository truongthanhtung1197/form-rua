/** @type {import('next').NextConfig} */
const { ADMIN_URL } = process.env;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/admin",
        destination: `${ADMIN_URL}/admin`,
      },
      {
        source: "/admin/:path*",
        destination: `${ADMIN_URL}/admin/:path*`,
      },
    ];
  },
  images: {
    domains: ["5002302-s3user.storebox.vn", "web-duongxuanphi.s3.ap-southeast-1.amazonaws.com"],
  },
};
