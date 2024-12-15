# Usar a imagem oficial do NGINX como base
FROM nginx:latest

# Copiar todo o conteúdo do projeto para o diretório padrão do NGINX
COPY . /usr/share/nginx/html

# Expor a porta 80 (porta padrão do NGINX)
EXPOSE 80
