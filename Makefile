theme_dest := $(shell jq '.contributes.themes[0].path' package.json)
themes_dir := $(shell dirname $(theme_dest))

build: $(theme_dest)
$(theme_dest): $(wildcard src/*)
	deno run --allow-write=$(themes_dir) src/main.ts $@

.PHONY: test
test:
	deno run --allow-read=$(themes_dir) test.ts
