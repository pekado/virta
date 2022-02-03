all: build-experiences

clean-build-start: clean build-start

build-start: build-experiences
	yarn workspace @virtahealth/docs start

clean:
	rm -rf @virtahealth/experiences/dist
	rm -rf @virtahealth/components/dist
	rm -rf @virtahealth/styles/dist
	rm -rf @virtahealth/utils/dist

clean-node:
	rm -rf @virtahealth/experiences/node_modules && @virtahealth/experiences/yarn.lock || true
	rm -rf @virtahealth/components/node_modules && @virtahealth/components/yarn.lock || true
	rm -rf @virtahealth/styles/node_modules && @virtahealth/styles/yarn.lock || true
	rm -rf @virtahealth/utils/node_modules && @virtahealth/utils/yarn.lock || true

local: clean build-experiences clean-node
	cd @virtahealth/utils && yarn install --production
	cd @virtahealth/styles && yarn install --production
	cd @virtahealth/components && yarn install --production
	cd @virtahealth/experiences && yarn install --production

build-components: build-utils build-styles
	yarn workspace @virtahealth/components build

build-experiences: build-components build-styles
	yarn workspace @virtahealth/experiences build

build-styles:
	yarn workspace @virtahealth/styles build

build-utils:
	yarn workspace @virtahealth/utils build

components: build-components

experiences: build-experiences

styles: build-styles

utils: build-utils

.PHONY: copy-files-to-pa-ios
copy-files-to-pa-ios:
	rsync -aP --delete @virtahealth/components/src/ ../participant_app_ios/node_modules/\@virtahealth/components/src/
	rsync -aP --delete @virtahealth/experiences/src/ ../participant_app_ios/node_modules/\@virtahealth/experiences/src/
	rsync -aP --delete @virtahealth/styles/src/ ../participant_app_ios/node_modules/\@virtahealth/styles/src/
	rsync -aP --delete @virtahealth/utils/src/ ../participant_app_ios/node_modules/\@virtahealth/utils/src/

.PHONY: copy-files-to-pa-web
copy-files-to-pa-web:
	rsync -aP --delete @virtahealth/components/src/ ../participant_app_py/node_modules/\@virtahealth/components/src/
	rsync -aP --delete @virtahealth/experiences/src/ ../participant_app_py/node_modules/\@virtahealth/experiences/src/
	rsync -aP --delete @virtahealth/styles/src/ ../participant_app_py/node_modules/\@virtahealth/styles/src/
	rsync -aP --delete @virtahealth/utils/src/ ../participant_app_py/node_modules/\@virtahealth/utils/src/

.PHONY: all local
