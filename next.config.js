import createBundleAnalyzerPlugin from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzerPlugin({
	enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import("next").NextConfig}
 */
const config = {};

export default withBundleAnalyzer(config);
