import { Color } from "./deps.ts";
import type { Theme } from "./Theme.ts";

// Solarized colors
const base03 = Color("#002b36");
const base02 = Color("#073642");
const base01 = Color("#586e75");
const base00 = Color("#657b83");
const base0 = Color("#839496");
const base1 = Color("#93a1a1");
const base2 = Color("#eee8d5");
const base3 = Color("#fdf6e3");
const cyan = Color("#2aa198");
const violet = Color("#6c71c4");
const orange = Color("#cb4b16");
const red = Color("#dc322f");
const blue = Color("#268bd2");
const green = Color("#859900");
const yellow = Color("#b58900");
const magenta = Color("#d33682");

// Extra colors
const white = Color("#fff");
const fadedBase01 = Color("#586e7534");
const base04 = Color("#003847");
const base041 = Color("#004052");
const base031 = Color("#00212b");
const base032 = Color("#052730");
const base011 = Color("#5b7e7a");
const base022 = Color("#284b53");
const transparentBase023 = Color("#00384700");
const fadedBase1 = Color("#93a1a145");
const lightlyFadedBase1 = Color("#93a1a1aa");
const fadedCyan = Color("#2aa19899");
const moreFadedCyan = Color("#2aa198ab");
const veryFadedCyan = Color("#2aa19844");
const violet01 = Color("#363b5f");
const dirtyBase1 = Color("#5d5938");
const dirtyBase2 = Color("#9d8a5e");
const darkRed = Color("#571b26");
const orangyRed = Color("#dc322f50");
const fadedOrangerRed = Color("#dc322f99");
const brightMagenta = Color("#a92049");
const base4 = Color("#ffeaea");
const lightBlue = Color("#047aa6");
const lightishBlue = Color("#005a6f");
const fadedLightishishBlue = Color("#004454aa");
const modeFadedLightishishBlue = Color("#00445488");
const brightCyan = Color("#1ebcc5");
const fadedBrightCyan = brightCyan.alpha(0.5);
const veryFadedBrightCyan = brightCyan.alpha(0.19);
const veryFadedWhite = white.alpha(0.14);
const mostFadedWhite = white.alpha(0.06);
const gray1 = Color("#b2b2b3");
const gray2 = Color("#f6f6f6");
const base0301 = Color("#011b23");

export const theme: Theme<Color> = {
  name: "Solarized Next",
  semanticHighlighting: true,
  semanticTokenColors: {
    comment: {
      foreground: base01,
      fontStyle: "italic",
    },
    string: cyan,
    regexp: cyan,
    number: violet,
    parameter: {
      foreground: orange,
      fontStyle: "italic",
    },
    variable: blue,
    "variable.readonly": {
      foreground: green,
      fontStyle: "italic",
    },
    keyword: green,
    function: yellow,
    typeParameter: {
      foreground: orange,
      fontStyle: "italic",
    },
    interface: green,
    "interface.defaultLibrary": {
      foreground: blue,
      fontStyle: "italic",
    },
    property: base0,
    namespace: {
      foreground: base0,
      fontStyle: "italic",
    },
    type: blue,
  },
  tokenColors: [
    {
      settings: {
        //"background": base03,
        foreground: base0,
        gutter: base02,
        misspelling: red,
        selectionBorder: base01,
      },
    },
    {
      name: "Comment",
      scope: [
        "comment",
        "comment keyword",
        "comment markup.underline.link",
        "comment string",
        "comment punctuation.definition",
        "comment punctuation",
        "comment text",
        "meta.documentation",
      ],
      settings: {
        fontStyle: "italic",
        foreground: base01,
      },
    },
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Regexp",
      scope: "string.regexp",
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Escape \\ char",
      scope: "constant.character.escape",
      settings: {
        foreground: red,
      },
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: violet,
      },
    },
    {
      name: "Variable",
      scope: "variable",
      settings: {
        foreground: blue,
      },
    },
    {
      name: "Variable Language",
      scope: [
        "variable.parameter",
        "parameters variable.function",
        "variable.language",
        "variable.parameter.function.language.special.self.python",
      ],
      settings: {
        fontStyle: "italic",
        foreground: orange,
      },
    },
    {
      name: "Keyword",
      scope: "keyword",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Import",
      scope: [
        "meta.import keyword",
        "keyword.control.import",
        "keyword.control.import.from",
        "keyword.other.import",
        "keyword.control.at-rule.include",
        "keyword.control.at-rule.import",
      ],
      settings: {
        foreground: orange,
      },
    },
    {
      name: "Arithmetical, Assignment, Comparision Operators",
      scope: [
        "keyword.operator",
        "keyword.operator.comparison",
        "keyword.operator.assignment",
        "keyword.operator.arithmetic",
      ],
      settings: {
        foreground: base00,
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Storage modifier",
      scope: "storage.modifier",
      settings: {
        fontStyle: "italic",
        foreground: base1,
      },
    },
    {
      name: "Namespace",
      scope: ["entity.name.namespace"],
      settings: {
        foreground: base0,
      },
    },
    {
      name: "Class",
      scope: [
        "keyword.control.class",
        "entity.name",
        "entity.name.class",
        "entity.name.type.class",
      ],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Type parameter",
      scope: ["entity.name.type.parameter"],
      settings: {
        foreground: orange,
        fontStyle: "italic",
      },
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        fontStyle: "italic",
        foreground: blue,
      },
    },
    {
      name: "Attribute",
      scope: "entity.other.attribute-name",
      settings: {
        fontStyle: "italic",
        foreground: yellow,
      },
    },
    {
      name: "Library class",
      scope: ["support", "support.type", "support.class"],
      settings: {
        foreground: green,
      },
    },
    {
      name: "Function name",
      scope: ["entity.name.function", "variable.function", "meta.block-level"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Variable start",
      scope: "punctuation.definition.variable",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Built-in constant",
      scope: ["constant", "constant.language", "meta.preprocessor"],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Section heading",
      scope: "entity.name.section",
      settings: {
        foreground: orange,
      },
    },
    {
      name: "Support.construct",
      scope: ["support.function.construct", "keyword.other.new"],
      settings: {
        foreground: orange,
      },
    },
    {
      name: "User-defined constant",
      scope: ["constant.character", "constant.other"],
      settings: {
        foreground: orange,
      },
    },
    {
      name: "Tag name",
      scope: "entity.name.tag",
      settings: {
        foreground: blue,
      },
    },
    {
      name: "Tag start/end",
      scope: [
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin",
        "punctuation.definition.tag.end",
      ],
      settings: {
        foreground: base01,
      },
    },
    {
      name: "Library function",
      scope: "support.function",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Continuation",
      scope: "punctuation.separator.continuation",
      settings: {
        foreground: red,
      },
    },
    {
      name: "Storage Type",
      scope: "storage.type",
      settings: {
        fontStyle: "italic",
        foreground: blue,
      },
    },
    {
      name: "Exception",
      scope: "support.type.exception",
      settings: {
        foreground: orange,
      },
    },
    {
      name: "Special",
      scope: "keyword.other.special-method",
      settings: {
        foreground: orange,
      },
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        fontStyle: "italic",
        //"background": "#6e2e32"
      },
    },
    {
      name: "Quoted String",
      scope: ["string.quoted.double", "string.quoted.single"],
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Quotes",
      scope: "punctuation.definition.string",
      settings: {
        foreground: base0,
      },
    },
    {
      name: "[]",
      scope: ["meta.brace.square", "punctuation.section.brackets"],
      settings: {
        foreground: blue,
      },
    },
    {
      name: "(),{}",
      scope: [
        "meta.brace.round",
        "meta.brace.curly",
        "punctuation.section",
        "punctuation.section.block",
        "punctuation.definition.parameters",
        "punctuation.section.group",
      ],
      settings: {
        foreground: base00,
      },
    },
    {
      name: "CSS: Standard color value",
      scope: [
        "support.constant.color",
        "invalid.deprecated.color.w3c-non-standard-color-name.scss",
      ],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "CSS: Selector > [] and non-spec tags",
      scope: "meta.selector.css",
      settings: {
        foreground: base00,
      },
    },
    {
      name: "CSS: Tag",
      scope: [
        "entity.name.tag.css",
        "entity.name.tag.scss",
        "source.less keyword.control.html.elements",
        "source.sass keyword.control.untitled",
      ],
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "CSS .class",
      scope: "entity.other.attribute-name.class",
      settings: {
        fontStyle: "italic",
        foreground: yellow,
      },
    },
    {
      name: "CSS: #id",
      scope: "entity.other.attribute-name.id",
      settings: {
        fontStyle: "italic",
        foreground: yellow,
      },
    },
    {
      name: "CSS :pseudo",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.tag.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
        "entity.other.attribute-name.tag.pseudo-class",
      ],
      settings: {
        fontStyle: "italic",
        foreground: blue,
      },
    },
    {
      name: "HTML: =",
      scope: [
        "text.html.basic meta.tag.other.html",
        "text.html.basic meta.tag.any.html",
        "text.html.basic meta.tag.block.any",
        "text.html.basic meta.tag.inline.any",
        "text.html.basic meta.tag.structure.any.html",
        "text.html.basic source.js.embedded.html",
        "punctuation.separator.key-value.html",
      ],
      settings: {
        foreground: base00,
      },
    },
    {
      name: "HTML: something=",
      scope: [
        "text.html.basic entity.other.attribute-name.html",
        "meta.tag.xml entity.other.attribute-name",
      ],
      settings: {
        fontStyle: "italic",
        foreground: yellow,
      },
    },
    {
      name: "Ruby: Special Method",
      scope: "keyword.other.special-method.ruby",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Ruby: Constant Other",
      scope: "variable.other.constant.ruby",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Ruby: :symbol",
      scope: "constant.other.symbol.ruby",
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Ruby: Special Method",
      scope: "keyword.other.special-method.ruby",
      settings: {
        foreground: orange,
      },
    },
    {
      name: "PHP: Array()",
      scope: "meta.array support.function.construct.php",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "C: Preprocessor",
      scope: [
        "entity.name.function.preprocessor.c",
        "meta.preprocessor.c.include",
        "meta.preprocessor.macro.c",
      ],
      settings: {
        foreground: orange,
      },
    },
    {
      name: "C: include",
      scope: [
        "meta.preprocessor.c.include string.quoted.other.lt-gt.include.c",
        "meta.preprocessor.c.include punctuation.definition.string.begin.c",
        "meta.preprocessor.c.include punctuation.definition.string.end.c",
      ],
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Other: Removal",
      scope: ["other.package.exclude", "other.remove"],
      settings: {
        foreground: red,
      },
    },
    {
      name: "Other: Add",
      scope: "other.add",
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Tex: {}",
      scope: [
        "punctuation.section.group.tex",
        "punctuation.definition.arguments.begin.latex",
        "punctuation.definition.arguments.end.latex",
        "punctuation.definition.arguments.latex",
      ],
      settings: {
        foreground: red,
      },
    },
    {
      name: "Tex: {text}",
      scope: "meta.group.braces.tex",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Tex: Other Math",
      scope: "string.other.math.tex",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Tex: {var}",
      scope: "variable.parameter.function.latex",
      settings: {
        fontStyle: "italic",
        foreground: orange,
      },
    },
    {
      name: "Tex: Math \\\\",
      scope: "punctuation.definition.constant.math.tex",
      settings: {
        foreground: red,
      },
    },
    {
      name: "Tex: Constant Math",
      scope: [
        "text.tex.latex constant.other.math.tex",
        "constant.other.general.math.tex",
        "constant.other.general.math.tex",
        "constant.character.math.tex",
      ],
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Tex: Other Math String",
      scope: "string.other.math.tex",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Tex: $",
      scope: [
        "punctuation.definition.string.begin.tex",
        "punctuation.definition.string.end.tex",
      ],
      settings: {
        foreground: red,
      },
    },
    {
      name: "Tex: \\label",
      scope: [
        "keyword.control.label.latex",
        "text.tex.latex constant.other.general.math.tex",
      ],
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Tex: \\label { }",
      scope: "variable.parameter.definition.label.latex",
      settings: {
        fontStyle: "italic",
        foreground: red,
      },
    },
    {
      name: "Tex: Function",
      scope: "support.function.be.latex",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Tex: Support Function Section",
      scope: "support.function.section.latex",
      settings: {
        foreground: orange,
      },
    },
    {
      name: "Tex: Support Function",
      scope: "support.function.general.tex",
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Tex: Reference Label",
      scope: "keyword.control.ref.latex",
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Python: storage",
      scope: [
        "storage.type.class.python",
        "storage.type.function.python",
        "storage.modifier.global.python",
      ],
      settings: {
        fontStyle: "italic",
        foreground: green,
      },
    },
    {
      name: "Python: Support.exception",
      scope: "support.type.exception.python",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "Shell: meta scope in loop",
      scope: ["meta.scope.for-in-loop.shell", "variable.other.loop.shell"],
      settings: {
        foreground: base1,
      },
    },
    {
      name: "Shell: Meta Block",
      scope: ["meta.scope.case-block.shell", "meta.scope.case-body.shell"],
      settings: {
        foreground: base1,
      },
    },
    {
      name: "Shell: []",
      scope: "punctuation.definition.logical-expression.shell",
      settings: {
        foreground: red,
      },
    },
    {
      name: "Storage",
      scope: "storage.modifier.c++",
      settings: {
        fontStyle: "italic",
        foreground: green,
      },
    },
    {
      name: "Perl: functions",
      scope: "support.function.perl",
      settings: {
        foreground: blue,
      },
    },
    {
      name: "diff: header",
      scope: ["meta.diff", "meta.diff.header"],
      settings: {
        foreground: base01,
      },
    },
    {
      name: "diff: range",
      scope: "meta.diff.range",
      settings: {
        foreground: blue,
      },
    },
    {
      name: "diff: deleted",
      scope: "markup.deleted",
      settings: {
        foreground: red,
      },
    },
    {
      name: "diff: changed",
      scope: "markup.changed",
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "diff: inserted",
      scope: "markup.inserted",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Markdown heading",
      scope: ["markup.heading", "punctuation.definition.heading.markdown"],
      settings: {
        foreground: yellow,
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown quote",
      scope: "markup.quote",
      settings: {
        foreground: green,
      },
    },
    {
      name: "Markdown em",
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown strong",
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown reference",
      scope: [
        "markup.underline.link.markdown",
        "meta.link.reference constant.other.reference.link.markdown",
      ],
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Markdown reference list",
      scope: "constant.other.reference.link.markdown",
      settings: {
        foreground: violet,
      },
    },
    {
      name: "Markdown linebreak",
      scope: "meta.paragraph.markdown meta.dummy.line-break",
      settings: {
        //"background": base01
      },
    },
    {
      name: "SublimeLinter Annotations",
      scope: "sublimelinter.notes",
      settings: {
        //"background": base01,
        foreground: base01,
      },
    },
    {
      name: "SublimeLinter Error Outline",
      scope: "sublimelinter.outline.illegal",
      settings: {
        //"background": base01,
        foreground: base01,
      },
    },
    {
      name: "SublimeLinter Error Underline",
      scope: "sublimelinter.underline.illegal",
      settings: {
        //"background": red
      },
    },
    {
      name: "SublimeLinter Warning Outline",
      scope: "sublimelinter.outline.warning",
      settings: {
        //"background": base0,
        foreground: base0,
      },
    },
    {
      name: "SublimeLinter Warning Underline",
      scope: "sublimelinter.underline.warning",
      settings: {
        //"background": yellow
      },
    },
    {
      name: "SublimeLinter Violation Outline",
      scope: "sublimelinter.outline.violation",
      settings: {
        //"background": base00,
        foreground: base00,
      },
    },
    {
      name: "SublimeLinter Violation Underline",
      scope: "sublimelinter.underline.violation",
      settings: {
        //"background": orange
      },
    },
    {
      name: "SublimeLinter Warning",
      scope: "sublimelinter.mark.warning",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "SublimeLinter Error",
      scope: "sublimelinter.mark.error",
      settings: {
        foreground: red,
      },
    },
    {
      name: "SublimeLinter Gutter Mark",
      scope: "sublimelinter.gutter-mark",
      settings: {
        foreground: base00,
      },
    },
    {
      name: "SublimeBracketHighlighter",
      scope: "brackethighlighter.all",
      settings: {
        foreground: base01,
      },
    },
    {
      name: "Find In Files: File Name",
      scope: "entity.name.filename.find-in-files",
      settings: {
        foreground: cyan,
      },
    },
    {
      name: "Find In Files: Line numbers",
      scope: "constant.numeric.line-number.find-in-files",
      settings: {
        foreground: base01,
      },
    },
    {
      name: "GitGutter deleted",
      scope: "markup.deleted.git_gutter",
      settings: {
        foreground: red,
      },
    },
    {
      name: "GitGutter inserted",
      scope: "markup.inserted.git_gutter",
      settings: {
        foreground: green,
      },
    },
    {
      name: "GitGutter changed",
      scope: "markup.changed.git_gutter",
      settings: {
        foreground: yellow,
      },
    },
    {
      name: "JavaScript Variables",
      scope: [
        "variable.other.readwrite.js",
        "variable.other.object.js",
        "variable.other.constant.js",
      ],
      settings: {
        foreground: base0,
      },
    },
  ],
  colors: {
    // Base
    foreground: base0,
    focusBorder: fadedCyan,
    // "contrastActiveBorder": "",
    // "contrastBorder": "",
    // "widget.shadow": "",
    "selection.background": fadedCyan,
    "input.background": base04,
    "input.foreground": base1,
    "input.placeholderForeground": lightlyFadedBase1,
    "input.border": base031,
    "inputOption.activeBorder": fadedCyan,
    "inputValidation.infoBorder": violet01,
    "inputValidation.infoBackground": base032,
    "inputValidation.warningBackground": dirtyBase1,
    "inputValidation.warningBorder": dirtyBase2,
    "inputValidation.errorBackground": darkRed,
    "inputValidation.errorBorder": brightMagenta,
    errorForeground: base4,
    "badge.background": red,
    "badge.foreground": base2,
    "progressBar.background": lightBlue,
    "dropdown.background": base031,
    "dropdown.border": red,
    "dropdown.foreground": base0,
    "button.background": red,
    "button.foreground": base2,
    "list.activeSelectionBackground": lightishBlue,
    "list.activeSelectionForeground": base0,
    "list.focusBackground": lightishBlue,
    "list.hoverBackground": fadedLightishishBlue,
    "list.inactiveSelectionBackground": modeFadedLightishishBlue,
    "list.dropBackground": modeFadedLightishishBlue,
    "list.highlightForeground": brightCyan,
    "scrollbarSlider.activeBackground": brightCyan,
    "scrollbarSlider.background": veryFadedBrightCyan,
    "scrollbarSlider.hoverBackground": fadedBrightCyan,
    // Editor
    "editor.background": base03,
    "editor.foreground": base0,
    "editorIndentGuide.background": fadedBase01,
    "editorWhitespace.foreground": fadedBase01,
    "editorRuler.foreground": veryFadedWhite,
    "editor.lineHighlightBackground": mostFadedWhite,
    "editorActiveLineNumber.foreground": base2,
    "editor.selectionBackground": fadedBase1,
    "editorWidget.background": base031,
    "editorCursor.foreground": red,
    "editorHoverWidget.background": base041,
    "editorLineNumber.foreground": base01,
    "editorMarkerNavigationError.background": red,
    "editorMarkerNavigationWarning.background": base011,
    "editorLink.activeForeground": red,
    // Editor: Suggest
    // "editorSuggestWidget.background": "",
    // "editorSuggestWidget.border": "",
    // "editorSuggestWidget.foreground": "",
    // "editorSuggestWidget.highlightForeground": "",
    // "editorSuggestWidget.selectedBackground": "",
    // Editor: Peek View
    "peekView.border": moreFadedCyan,
    "peekViewTitle.background": base03,
    "peekViewResult.background": base03,
    "peekViewEditor.background": base031,
    "peekViewEditor.matchHighlightBackground": base022,
    // Workbench: Title
    "titleBar.activeForeground": base2,
    "titleBar.activeBackground": base03,
    "titleBar.inactiveForeground": gray1,
    "titleBar.inactiveBackground": gray2,
    // Workbench: Editors
    "editorGroup.border": base031,
    "editorGroup.background": base0301,
    "editorGroup.dropBackground": veryFadedCyan,
    "editorGroupHeader.tabsBackground": base031,
    "editorGroupHeader.tabsBorder": base04,
    // Workbench: Tabs
    "tab.activeForeground": base2,
    "tab.activeBackground": base04,
    "tab.activeBorder": red,
    "tab.unfocusedActiveBorder": orangyRed,
    "tab.inactiveForeground": base1,
    "tab.inactiveBackground": base031,
    "tab.border": transparentBase023,
    "tab.hoverBackground": base03,
    "tab.unfocusedHoverBackground": base03,
    "tab.hoverBorder": red,
    "tab.unfocusedHoverBorder": red,
    // Workbench: Activity Bar
    "activityBar.background": base03,
    "activityBar.border": base04,
    "activityBarBadge.background": red,
    // Workbench: Panel
    "panel.border": base031,
    "panelTitle.activeBorder": red,
    // Workbench: Side Bar
    "sideBar.background": base031,
    "sideBarTitle.foreground": base1,
    "sideBar.border": base04,
    "sideBarSectionHeader.background": base03,
    "sideBarSectionHeader.foreground": base2,
    // Workbench: Status Bar
    "statusBar.foreground": base1,
    "statusBar.background": base031,
    "statusBar.border": base04,
    "statusBar.debuggingBackground": base031,
    "statusBar.noFolderBackground": base031,
    "statusBarItem.prominentBackground": base04,
    "statusBarItem.prominentHoverBackground": base04,
    // "statusBarItem.activeBackground": "",
    // "statusBarItem.hoverBackground": "",
    // Workbench: Debug
    "debugToolBar.background": base031,
    "debugExceptionWidget.background": base031,
    "debugExceptionWidget.border": cyan,
    // Workbench: Notifications
    "notification.background": base04,
    "notification.foreground": base0,
    "notification.buttonBackground": red,
    "notification.buttonForeground": base2,
    // Workbench: Quick Open
    "pickerGroup.foreground": red,
    "pickerGroup.border": fadedOrangerRed,
    // Workbench: Git Decoration Colors
    "gitDecoration.modifiedResourceForeground": green,
    "gitDecoration.deletedResourceForeground": red,
    "gitDecoration.untrackedResourceForeground": cyan,
    "gitDecoration.ignoredResourceForeground": red,
    "gitDecoration.conflictingResourceForeground": base0,
    // Workbench: Terminal
    // Colors sourced from the official palette http://ethanschoonover.com/solarized
    "terminal.ansiBlack": base02,
    "terminal.ansiRed": red,
    "terminal.ansiGreen": green,
    "terminal.ansiYellow": yellow,
    "terminal.ansiBlue": blue,
    "terminal.ansiMagenta": magenta,
    "terminal.ansiCyan": cyan,
    "terminal.ansiWhite": base2,
    "terminal.ansiBrightBlack": base02,
    "terminal.ansiBrightRed": orange,
    "terminal.ansiBrightGreen": green,
    "terminal.ansiBrightYellow": yellow,
    "terminal.ansiBrightBlue": base0,
    "terminal.ansiBrightMagenta": violet,
    "terminal.ansiBrightCyan": blue,
    "terminal.ansiBrightWhite": base3,
  },
};
