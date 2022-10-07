import { Color } from "./deps.ts";
import {
  isSemanticTokenColor,
  SemanticTokenColor,
  SemanticTokenColors,
  Theme,
  TokenColors,
} from "./Theme.ts";

const convertColors = <A, B>(
  fn: (x: A) => B,
  c: Record<string, A>
): Record<string, B> =>
  Object.fromEntries(Object.entries(c).map(([prop, val]) => [prop, fn(val)]));

const convertSemanticTokenColor = <A, B>(
  fn: (x: A) => B,
  c: SemanticTokenColor<A>
): SemanticTokenColor<B> => {
  const { foreground: _foreground, ...rest } = c;
  return {
    ...rest,
    ...(c.foreground && { foreground: fn(c.foreground) }),
  };
};

const convertSemanticTokenColors = <A, B>(
  fn: (x: A) => B,
  c: SemanticTokenColors<A>
): SemanticTokenColors<B> =>
  Object.fromEntries(
    Object.entries(c).map(([scope, val]) => [
      scope,
      isSemanticTokenColor(val) ? convertSemanticTokenColor(fn, val) : fn(val),
    ])
  );

const convertTokenColors =
  <A, B>(fn: (x: A) => B) =>
  (c: TokenColors<A>): TokenColors<B> => {
    if ("name" in c) {
      const { foreground, ...rest } = c.settings;
      return {
        ...c,
        settings: {
          ...rest,
          ...(foreground && { foreground: fn(foreground) }),
        },
      };
    }
    return {
      settings: Object.fromEntries(
        Object.entries(c.settings as Record<string, A>).map(([key, v]) => [
          key,
          fn(v),
        ])
      ),
    };
  };

export const convertTheme =
  <A, B>(fn: (x: A) => B) =>
  (t: Theme<A>): Theme<B> => ({
    name: t.name,
    colors: convertColors(fn, t.colors),
    semanticTokenColors: convertSemanticTokenColors(fn, t.semanticTokenColors),
    tokenColors: t.tokenColors.map(convertTokenColors(fn)),
    ...(t.semanticHighlighting
      ? { semanticHighlighting: t.semanticHighlighting }
      : undefined),
  });

const hexify = (v: Color): string => (v.alpha() < 1 ? v.hexa() : v.hex());
const unhexify = (v: string): Color => Color(v);

export const hexifyTheme = convertTheme(hexify);
export const unhexifyTheme = convertTheme(unhexify);
