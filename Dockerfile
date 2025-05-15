FROM php:8.2-apache

# Active mod_rewrite si besoin
RUN a2enmod rewrite

# Supprime le warning ServerName
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Copie des fichiers
COPY . /var/www/html/
