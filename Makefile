
all: clean build check upload

clean:
	@rm -rf dist build

build:
	@python setup.py sdist bdist_wheel 

check:
	@twine check dist/*

upload:
	@twine upload --repository pypi dist/* --verbose
