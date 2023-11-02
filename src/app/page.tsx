import type { ReactNode } from "react";

import { Button } from "../components/Button";

export default function Page(): ReactNode {
  return (
    <div className="absolute grid h-full w-full place-items-center">
      <h1 className="text-4xl text-blue-400 md:text-8xl">Hello, world!</h1>
      <Button>Button</Button>
    </div>
  );
}
