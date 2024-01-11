import "~/styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactNode {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Next.js template",
};
