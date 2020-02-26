FROM python:3.7-alpine
MAINTAINER nutan

ENV PYTHONUNBUFFERED 1

copy ./requirements.txt /requirements.txt

RUN apk add --no-cache --virtual .build-deps gcc musl-dev libffi-dev openssl-dev && pip install -r /requirements.txt  && apk del .build-deps gcc musl-dev


RUN mkdir /login_pwa

WORKDIR /login_pwa
COPY ./login_pwa/ /login_pwa

RUN adduser -D user
USER  user
