# dcoker相关命令
## 容器命令
1. 容器转为后台运行 ctrl+q+p+q

## 镜像命令
1.根据镜像运行一个容器 docker run 


## 仓库命令

## 参考
1. [网络-Docker 提供的几种原生网络和自定义网络(11)](https://www.cnblogs.com/hanxiaohui/p/8550506.html)
2. [docker系列-10.docker安装fastdfs](https://blog.csdn.net/sukiyou_xixi/article/details/79197173)
docker run --add-host fastdfs.net:192.168.1.155 --name fastdfs --net=host -e TRACKER_ENABLE=1 -e NGINX_PORT=81 -v /home/fastdfs:/storage/fastdfs -it mypjb/fastdfs