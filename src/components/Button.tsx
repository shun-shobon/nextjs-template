import { clsx } from "clsx";

import { forwardRef } from "~/libs/forward-ref";

import * as styles from "./Button.css";

export default forwardRef<"button">(
	"Button",
	({ as: Component = "button", className, ...rest }, ref) => {
		return (
			<Component
				{...rest}
				className={clsx(styles.button, className)}
				ref={ref}
			/>
		);
	},
);
