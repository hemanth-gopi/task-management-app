FROM python:3
ENV PYTHONUNBUFFERED=1
RUN apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_9.x | bash - \
  && apt-get install -y nodejs \
  && curl -L https://www.npmjs.com/install.sh | sh
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/