themes := $(shell pwd)/themes

.PHONY: run
run:
	deno run --allow-write=$(themes) src/main.ts
