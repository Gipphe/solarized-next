import { diff } from "https://esm.sh/deep-object-diff@1.1.7";
import json5 from "https://esm.sh/json5@2.2.1";
import { hexifyTheme, unhexifyTheme } from "./src/hexify.ts";

const getJSON = (x: string) =>
  hexifyTheme(
    unhexifyTheme(
      json5.parse(new TextDecoder("utf8").decode(Deno.readFileSync(x)))
    )
  );

const gen = getJSON("./themes/Solarized Next+-color-theme.json");
const original = getJSON("./themes/Solarized Next-color-theme.json");

console.log(diff(original, gen));
