run:
	npm run dev

install:
	npm install

build-image:
	docker build . -t foodyfood/dashboard

run-image:
	docker run -it --rm -p 3000:3000 foodyfood/dashboard

