### EMQ安装
1. 下载emq [http://www.emqtt.com/downloads](http://www.emqtt.com/downloads)
2. 解压emq
3. 启动emq
```
unzip emqx-macosx-v3.1.0.zip && cd emqx

# 启动emqx
./bin/emqx start

# 检查运行状态
./bin/emqx_ctl status

# 停止emqx
./bin/emqx stop
```
参考:
* [五分钟下载启动 EMQ](https://developer.emqx.io/docs/broker/v3/cn/getstarted.html#emq)
* [EMQ 2.3中的本地/共享订阅](https://www.jianshu.com/p/16d70dc20542)
