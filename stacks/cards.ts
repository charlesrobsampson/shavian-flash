import { Api, StaticSite, StackContext, Table } from "sst/constructs";

export function CardsStack({ stack }: StackContext) {
 
  const site = new StaticSite(stack, "ReactSite", {
    path: "packages/frontend",
    buildCommand: "npm run build",
    buildOutput: "build",
    environment: {},
  });
  
  stack.addOutputs({
    SiteUrl: site.url,
  });
}