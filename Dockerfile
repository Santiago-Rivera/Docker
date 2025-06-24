FROM python:3-alpine3.22

WORKDIR /app

COPY . /app

CMD [ "python", "rng.py" ]