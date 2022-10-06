import { diff } from "https://esm.sh/deep-object-diff@1.1.7";
import json5 from "https://esm.sh/json5@2.2.1";
import * as assert from "https://deno.land/std@0.158.0/testing/asserts.ts";
import { hexifyTheme, unhexifyTheme } from "./src/hexify.ts";

type F<A, B> = (x: A) => B;
interface Identity<A> {
  map<B>(f: F<A, B>): Identity<B>;
}
const Identity = <A>(x: A): Identity<A> => ({
  map: <B>(fn: F<A, B>): Identity<B> => Identity(fn(x)),
});

const getJSON = (x: string) =>
  Identity(x)
    .map(Deno.readFileSync)
    .map((x) => new TextDecoder("utf8").decode(x))
    .map(json5.parse)
    .map(unhexifyTheme)
    .map(hexifyTheme);

Deno.test({
  name: "same as original",
  fn() {
    const gen = getJSON("./themes/Solarized_Next+-color-theme.json");
    const original = getJSON("./themes/Solarized Next-color-theme.json");
    assert.assertEquals(gen, original);
    assert.assertEquals(diff(original, gen), {});
  },
});
