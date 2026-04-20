#!/bin/sh

sed -i "s|__VERSION__|$APP_VERSION|g" /usr/share/nginx/html/index.html

nginx -g "daemon off;"