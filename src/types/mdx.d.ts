declare module "*.mdx" {
  import type { ComponentType } from "react";
  const component: ComponentType<{ components?: Record<string, ComponentType<unknown>> }>;
  export default component;
  export const metadata: Record<string, unknown> | undefined;
}
