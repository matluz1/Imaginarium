FROM devopsfaith/krakend:latest

RUN apk add envsubst

COPY krakend.template.json /etc/krakend/krakend.template.json

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
