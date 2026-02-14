declare module "*.yaml" {
  // biome-ignore lint/suspicious/noExplicitAny: field can store any value
  const value: Record<string, any>;
  export default value;
}
