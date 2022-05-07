run:
	npm run dev

install:
	npm install

build-image:
	docker build -f build/dockerfile -t ghcr.io/foodyfood/dynamic-react-dashboard:latest ./build/

run-image:
	docker run -it --rm -p 3000:3000 ghcr.io/foodyfood/dynamic-react-dashboard:latest

push-image:
	docker push ghcr.io/foodyfood/dynamic-react-dashboard:latest


deploy:
	-helm install infra-push-dash ./deploy/ -n infra-push --create-namespace

restart:
	kubectl rollout restart deployment/infra-push-dash --namespace $(namespace)
