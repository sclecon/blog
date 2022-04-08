FROM node:alpine3.14
MAINTAINER sclecon <27941662@qq.com>
WORKDIR /opt/www

ENV NODE_ENV='production'

RUN npm -v \
    && node -v \
    && npm install --global yarn --force \
    && yarn -v \
    && npm install --global npm@8.6.0 \
    && echo "升级NPM版本成功" \
    && npm -v \
    && npm install --global @vue/cli \
    && echo "vueCli安装完成" \
    && vue -V