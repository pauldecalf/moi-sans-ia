FROM php:8.2-apache

# Copie des fichiers du projet
COPY . /var/www/html/

# Activation de mod_rewrite si nécessaire
RUN a2enmod rewrite

# Dépendances supplémentaires si besoin
# RUN docker-php-ext-install pdo pdo_mysql ...
