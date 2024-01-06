import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          Post: "./models#PostModel",
          Author: "./models#AuthorModel",
          Review: "./models#ReviewModel",
        },
      },
    },
  },
};

export default config;
