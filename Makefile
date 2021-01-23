install:
	npm install

test:
	npx -n --experimental-vm-modules jest

test-coverage:
	npx -n --experimental-vm-modules jest --collect-coverage

lint:
	npx eslint ./{src,bin}/**/*.js
