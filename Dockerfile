FROM httpd:2.4.63-alpine3.21

RUN rm /usr/local/apache2/conf/httpd.conf
RUN rm -rf /usr/local/apache2/htdocs/*
RUN rm -rf /usr/local/apache2/cgi-bin/*

COPY ./conf/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./htdocs/* /usr/local/apache2/htdocs/
COPY ./cgi-bin/index.html /usr/local/apache2/cgi-bin/index.html

RUN chmod 644 /usr/local/apache2/conf/httpd.conf
RUN chmod 644 /usr/local/apache2/htdocs/*
RUN chmod 755 /usr/local/apache2/cgi-bin/index.html
