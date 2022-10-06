import { hexifyTheme } from "./hexify.ts";
import { theme } from "./solarized.ts";

const __dirname = new URL(".", import.meta.url).pathname;

Deno.writeFileSync(
  `${__dirname}/../themes/Solarized Next+-color-theme.json`,
  new TextEncoder().encode(JSON.stringify(hexifyTheme(theme), null, 4))
);
