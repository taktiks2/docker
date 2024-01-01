# requirements.txtを使ったdjangoの実行環境
FROM python:3.7

WORKDIR /usr/src/backend

COPY ./requirements.txt /requirements.txt
RUN pip install --no-cache-dir -r /requirements.txt

EXPOSE 8000
