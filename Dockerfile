# 使用node作为基础镜像
FROM node:10.16.0

# 安装NGINX
RUN apt-get update \
    && apt-get install -y nginx

# 指定工作目录
WORKDIR /app

# 将当前目录下的所有文件copy的工作目录下
COPY . /app

# 声明运行时容器提供的服务端口

EXPOSE 80
# 安装依赖，打包编译
RUN npm install \
    && npm run build \
    && cp -r build/* /var/www/html \
    && rm -rf /app

CMD ["nginx","-g","daemon off;"]
