import createBundleAnalyzerPlugin from "@next/bundle-analyzer";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withBundleAnalyzer = createBundleAnalyzerPlugin({
	enabled: process.env.ANALYZE === "true",
});
const withVanillaExtract = createVanillaExtractPlugin();

/**
 * @type {import("next").NextConfig}
 */
const config = {
	experimental: {
		webpackBuildWorker: true,
	},
};

export default withBundleAnalyzer(withVanillaExtract(config));
