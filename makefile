bpr: build-image push-image restart

run:
	pushd ./build/; npm run dev; popd;

install-win:
	bash.exe -c -i "pushd ./build/; npm install; popd"

run-win:
	bash.exe -c -i "pushd ./build/; npm run dev; popd"

build-image:
	docker build -f build/dockerfile -t ghcr.io/foodyfood/dynamic-react-dashboard:latest ./build/

run-image:
	docker run -it --rm -p 3000:3000 ghcr.io/foodyfood/dynamic-react-dashboard:latest

push-image:
	docker push ghcr.io/foodyfood/dynamic-react-dashboard:latest

helm-deploy:
	-helm install dashboard ./deploy/ -n dashboard --create-namespace

restart:
	kubectl rollout restart deployment/dashboard --namespace dashboard
