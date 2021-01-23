install:
	npm install

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

lint:
	npx eslint ./{src,bin}/**/*.js
