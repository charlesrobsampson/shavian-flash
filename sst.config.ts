import { SSTConfig } from "sst";
import { CardsStack } from "./stacks/cards";

export default {
  config(_input) {
    return {
      name: "shavian-flash",
      region: "us-west-1",
    };
  },
  stacks(app) {
    app.stack(CardsStack);
  }
} satisfies SSTConfig;
