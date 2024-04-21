import { twMerge } from "tailwind-merge";

import { forwardRef } from "~/libs/forward-ref";

export default forwardRef<"button">(
	"Button",
	({ as: Component = "button", className, ...rest }, ref) => {
		return (
			<Component
				{...rest}
				className={twMerge(
					"rounded-full bg-blue-500 px-4 py-2 text-white",
					className,
				)}
				ref={ref}
			/>
		);
	},
);
