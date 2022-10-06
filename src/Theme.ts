import { Color } from "./deps.ts";

export interface Theme<Color> {
  name: string;
  semanticHighlighting?: boolean;
  semanticTokenColors: SemanticTokenColors<Color>;
  tokenColors: TokenColors<Color>[];
  colors: ThemeColors<Color>;
}

export interface SemanticTokenColors<Color> {
  [scope: string]: Color | SemanticTokenColor<Color>;
}

export interface SemanticTokenColor<Color> {
  foreground?: Color;
  fontStyle?: string;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

export function isSemanticTokenColor<A>(
  x: unknown,
): x is SemanticTokenColor<A> {
  if (x instanceof Color) {
    return false;
  }
  if (typeof x !== "object" || x == null) {
    return false;
  }
  return true;
}

export type TokenColors<Color> = BaseColors<Color> | ScopedTokenColors<Color>;

export interface BaseColors<Color> {
  settings: BaseColorSettings<Color>;
}

export interface BaseColorSettings<Color> {
  foreground?: Color;
  gutter?: Color;
  misspelling?: Color;
  selectionBorder?: Color;
}

export interface ScopedTokenColors<Color> {
  name: string;
  scope: string | string[];
  settings: TokenColorSettings<Color>;
}

export interface TokenColorSettings<Color> {
  fontStyle?: string;
  foreground?: Color;
}

export interface ThemeColors<Color> {
  [prop: string]: Color;
}
