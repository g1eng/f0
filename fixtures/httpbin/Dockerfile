FROM debian:buster-slim

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN apt update -y && apt install python3-pip unzip git curl -y && pip3 install --no-cache-dir pipenv

ADD Pipfile Pipfile.lock /httpbin/
WORKDIR /httpbin
RUN /bin/bash -c "pip3 install --no-cache-dir -r <(pipenv lock -r)"

RUN /bin/bash -c "curl -sL https://github.com/postmanlabs/httpbin/archive/refs/tags/v0.6.1.zip > htb.zip && unzip -d . htb.zip && mv -v httpbin-0.6.1/* . && rm -rv httpbin-0.6.1 htb.zip "
RUN pip3 install --no-cache-dir /httpbin

EXPOSE 80

CMD ["gunicorn", "-b", "0.0.0.0:80", "httpbin:app", "-k", "gevent"]
