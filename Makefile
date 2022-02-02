.PHONY: all setup clean

PWD = $(shell pwd)

all: setup

setup:
	npm install

clean:
	rm -fr "${PWD}/package-lock.json"
	rm -fr "${PWD}/node_modules"
	rm -fr "${PWD}/.next"
	rm -fr "${PWD}/out"