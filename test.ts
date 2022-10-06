import { diff } from "https://esm.sh/deep-object-diff@1.1.7";
import json5 from "https://esm.sh/json5@2.2.1";
import { hexifyTheme, unhexifyTheme } from "./src/hexify.ts";

const getJSON = (x: string) =>
  Identity(x)
    .map(Deno.readFileSync)
    .map((x) => new TextDecoder("utf8").decode(x))
    .map(json5.parse)
    .map(unhexifyTheme)
    .map(hexifyTheme);

const gen = getJSON("./themes/Solarized_Next+-color-theme.json");
const original = getJSON("./themes/Solarized Next-color-theme.json");

console.log(diff(original, gen));

type F<A, B> = (x: A) => B;
interface V<A> {
  map<B>(f: F<A, B>): V<B>;
}
const Identity = <A>(x: A): V<A> => ({
  map: <B>(fn: F<A, B>): V<B> => Identity(fn(x)),
});
