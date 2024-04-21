import { twMerge } from "tailwind-merge";

import { forwardRef } from "~/libs/forward-ref";

export default forwardRef<"button">(
	"Button",
	({ as: Component = "button", className, ...rest }, ref) => {
		return (
			<Component
				{...rest}
				className={twMerge(
					"bg-blue-500 text-white px-4 py-2 rounded-full",
					className,
				)}
				ref={ref}
			/>
		);
	},
);
