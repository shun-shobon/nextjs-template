import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import * as styles from "./Button.css";

export type ButtonProps = ComponentPropsWithoutRef<"button">;

export default function Button({
  className,
  ...props
}: ButtonProps): ReactNode {
  return <button className={clsx(styles.button, className)} {...props} />;
}
