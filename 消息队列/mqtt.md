# EMQ
1. 通配符
MQTT 主题(Topic) 支持’+’, ‘#’的通配符，’+’通配一个层级，’#’通配多个层级(必须在末尾)。
2. EMQ 默认开启的 MQTT 服务 TCP 端口

端口|说明
--:|--
1883|MQTT 协议端口
8883|MQTT/SSL 端口
8083|MQTT/WebSocket 端口
8084|MQTT/WebSocket/SSL 端口
8080|HTTP API端口
18083|Dashboard 管理控制台端口
4369|集群节点发现端口
6369|集群节点控制通道
## 链接
[文档](http://www.emqtt.com/docs/v2/getstarted.html)