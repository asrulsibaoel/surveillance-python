#!/bin/bash

#!make
include .env
export $(shell sed 's/=.*//' .env)

.PHONY: clean system-packages python-packages install tests run all

clean:
	find . -type f -name '*.pyc' -delete
	find . -type f -name '*.log' -delete

# system-packages:
# 	sudo apt install python-pip -y


install: 
	pip install -r requirements.txt

tests:
	python manage.py test

run-server:
	flask run --host=${SERVER_IP}

run-client:
	python3 client.py

run-all: run-server run-client

all: clean install tests run
