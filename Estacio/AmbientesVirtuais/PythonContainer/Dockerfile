FROM python

RUN mkdir -p /app/aula

ENV APP_NAME=teste.py

COPY ${APP_NAME} /app/aula/

ENTRYPOINT [ "python", "/app/aula/teste.py" ]