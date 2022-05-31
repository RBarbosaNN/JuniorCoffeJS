FROM openjdk

RUN mkdir -p /app/aula

ENV APP_NAME=teste.java

COPY ${APP_NAME} /app/aula/

ENTRYPOINT [ "java", "/app/aula/teste.java" ]
