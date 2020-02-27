# 使用node作为基础镜像
FROM node:10-alpine

# 指定工作目录
WORKDIR /app

ADD package.json /app
RUN npm install --production

# 将当前目录下的所有文件copy的工作目录下
ADD . /app
RUN npm run build && npm install -g http-server

EXPOSE 80

CMD http-server ./build -p 80
