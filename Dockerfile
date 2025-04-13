FROM httpd:2.4.63-bookworm

RUN rm -rf /usr/local/apache2/htdocs/*
RUN rm -rf /usr/local/apache2/cgi-bin/*
RUN install -m 0755 -d /usr/local/apache2/cgi-bin/ip
RUN rm /usr/local/apache2/conf/httpd.conf

COPY ./htdocs/* /usr/local/apache2/htdocs/
COPY ./cgi-bin/index.html /usr/local/apache2/cgi-bin/index.html
COPY ./cgi-bin/raw.html /usr/local/apache2/cgi-bin/ip/index.html
COPY ./conf/httpd.conf /usr/local/apache2/conf/httpd.conf

RUN chmod 644 /usr/local/apache2/htdocs/*
RUN chmod 755 /usr/local/apache2/cgi-bin/index.html
RUN chmod 755 /usr/local/apache2/cgi-bin/ip/index.html
RUN chmod 644 /usr/local/apache2/conf/httpd.conf
