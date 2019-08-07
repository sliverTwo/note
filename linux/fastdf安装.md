1. 下载安装包
	wget https://github.com/happyfish100/libfastcommon/archive/V1.0.39.tar.gz -SO libfastcommon.tar.gz
	wget https://github.com/happyfish100/fastdfs/archive/V5.11.tar.gz -SO fastdfs.tar.gz
	wget https://github.com/happyfish100/fastdfs-nginx-module/archive/V1.20.tar.gz -SO fastdfs-nginx-module.tar.gz
2. 安装 libfastcommon
cd libfastcommon-1.0.39
./make.sh
./make.sh install 
3. 安装 fastdfs
cd fastdfs-5.11
./make.sh
./make.sh install


## 参考
[FastDFS入门一篇就够](https://segmentfault.com/a/1190000018251300?utm_source=tag-newest)