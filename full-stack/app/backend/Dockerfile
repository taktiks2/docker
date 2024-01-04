FROM python:3.8

WORKDIR /usr/src/backend

COPY ./requirements.txt /requirements.txt
RUN pip install --no-cache-dir -r /requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "--settings=config.settings.development"]
