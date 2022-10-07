import { hexifyTheme } from "./hexify.ts";
import { theme } from "./solarized.ts";

const dest = Deno.args[0];
if (!dest) {
  console.log("Missing destination path.");
  Deno.exit(1);
}

Deno.writeFileSync(
  dest,
  new TextEncoder().encode(JSON.stringify(hexifyTheme(theme), null, 4)),
);
