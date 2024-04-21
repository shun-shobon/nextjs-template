import type { ReactNode } from "react";

import Button from "~/components/Button";

export default function Page(): ReactNode {
	return (
		<main className="grid h-screen w-full place-items-center">
			<h1 className="text-4xl font-bold">Hello, world!</h1>
			<Button>Button</Button>
		</main>
	);
}
