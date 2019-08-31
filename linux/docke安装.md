# centos7安装docker
## 环境要求
1. 内核版本高于3.10 uname -r 
2. 更新yum包 sudo yum update
3. 安装需要的软件包  sudo yum install -y yum-utils device-mapper-persistent-data lvm2
## 安装步骤
1. 设置yum源 sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
2. 查看docker版本 yum list docker-ce --showduplicates | sort -r
3. 安装


## 旧版本卸载
1. sudo yum remove docker  docker-common docker-selinux docker-engine

# 常用命令
## 镜像拉取
1. 拉取镜像 docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]  

## 运行容器
### 命令 
1. 运行 docker run -it 

### 参数说明
1. -i 交互式操作
2. -t 终端
3. --rm 容器退出后随之将其删除
4. 

## 镜像操作
1. docker image ls
2. 查看体积 docker system df 
3. 删除本地镜像 docker image rm [选项] <镜像1> [<镜像2> ...]
4. 创建镜像  docker commit d4e3 mytomcat:1.0

## 参考
1. [使用Docker搭建Tomcat运行环境](https://www.cnblogs.com/areyouready/p/8949991.html)