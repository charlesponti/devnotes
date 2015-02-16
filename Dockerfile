FROM kyma/docker-nginx

ADD dist/ /var/www
ADD nginx.conf /etc/nginx.conf

CMD 'nginx'

# docker build -t app .
# docker run -p 80:80 -d nginx
