import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@ecmel/api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@ecmel/api";
