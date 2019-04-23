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
## paho js API文档介绍
### 1. MQTT.Client(host, port, path, clientId)  

#### 参数说明  

名称|类型|描述
--|--|--|
host|string|mqtt消息服务器的地址,一个webscoket连接url或者一个IP地址
port|number|端口号,当且仅当host为ip时使用
path|string|请求连接的路径,当且仅当host为ip时使用,默认:'/mqtt'
clientId|string|客户端标识,长度限制为1-23个字符

#### 属性列表  

名称|类型|描述
--|--|--|
host|string|同参数,只读属性
port|number|同参数,只读属性
path|string|同参数,只读属性
clientId|string|同参数,只读属性
onConnectionLost|function| 连接失去后的回调(前提是得先连接上),参数: {errorCode,errorMessage}
onMessageDelivered|function|当发布的消息被服务器分发后的回调,个人理解,相当于你发送的消息到订阅的客户时的回调
onMessageArrived|function|当收到你订阅的消息的回调,参数 Paho.MQTT.Message
onConnected|function|当调用connect()方法后连接成功的回调,参数:1.reconnect(boolean):是否是重连后的回调,2.URI(string):连接上的uri
disconnectedPublishing|boolean|当失去连接时是否发布遗言
disconnectedBufferSize|number|理解有限,不进行翻译,(Used to set the maximum number of messages that the disconnected buffer will hold before rejecting new messages. Default size: 5000 messages)
trace|function|called whenever trace is called. TODO

#### 方法
##### 1. connect()

名称|类型|描述
--|--|--|
connectOptions|object|连接使用的属性,详细说明见下表

名称|类型|描述
--|--|--|
timeout|number|当多久为连接上时视为超时,默认 30s
userName|string|用户名
password|string|密码
willMessage|Paho.MQTT.Message|当连接异常断开时发送的遗言消息
keepAliveInterval|number|当客户端在指定时间内无活动时，服务器视为其断开，默认60s.
cleanSession|boolean|当断开连接时，清除sesion。默认为true
useSSL|boolean|是否使用ssl安全连接
invocationContext|object|onSuccess和onFailure的回调参数
onSuccess|function|连接成功后的回调,参数:{invocationContext}
onFailure|function|连接失败后的回调,参数:{invocationContext,errorCode,errorMessage} 
hosts|array|多个可选连接地址
ports|array|连接的端口,与hosts匹配,当hosts为ip时有效
reconnect|boolean|是否自动重连
mqttVersion|number|mqtt服务的版本,3=MQTT V3.1, 4=MQTT V3.1.1
mqttVersionExplicit|boolean|强制指定的版本,如果版本不同则连接失败
uris|array|效果同hosts+ports(推测)

##### 2. disconnect() 正常断开连接

##### 3. publish(topic, payload, qos, retained) 给目标消费者发送一条消息
名称|类型|描述
--|--|--|
topic|string/Paho.MQTT.Message	|发布的主题名称,当只有一个参数时,使用Paho.MQTT.Message,即publish(msg)
payload|string\ArrayBuffer|发布的数据
qos|number|设定服务器分发此消息的质量,0 只发一次(默认),1 最少一次,2 有且只有一次
retained|boolean|是否在服务端保持,默认为false,如果设置为true,该消息会保存在服务器上,在此消息发布后的订阅者也能收到此消息,否则，只有在发布前订阅的才能接受到此消息。

##### 4. send(topic, payload, qos, retained) : 同publish

##### 5. subscribe(filter, subscribeOptions) : 订阅消息
名称|类型|描述
--|--|--|
filter|string|订阅的主题,支持通配符 +、#
subscribeOptions|object|其它属性,具体见下表

名称|类型|描述
--|--|--|
qos|number|此次订阅收到消息的最高等级,传输的质量为订阅和发布中小的qos,其与发布qos的关系见[MQTT QOS等级订阅和发布的关系](https://blog.csdn.net/gamereborn/article/details/80211975)
invocationContext|object|连接成功或失败的回调参数
onSuccess|function|连接成功的回调, 回调参数 {invocationContext}
onFailure|function|连接失败的回调,回调参数 {invocationContext,errorCode,errorMessage} 
timeout|number| 连接超时时间,当超出此时间时视为失败,会回调失败函数
#####  6. unsubscribe(filter, unsubscribeOptions) 取消订阅
名称|类型|描述
--|--|--|
filter|string|订阅的主题,支持通配符 +、#
subscribeOptions|object|其它属性,具体见下表

名称|类型|描述
--|--|--|
invocationContext|object|连接成功或失败的回调参数
onSuccess|function|连接成功的回调, 回调参数 {invocationContext}
onFailure|function|连接失败的回调,回调参数 {invocationContext,errorCode,errorMessage} 
timeout|number| 连接超时时间,当超出此时间时视为失败,会回调失败函数
### 2. MQTT.Message(payload)
####    1. 参数说明  

名称|类型|描述
--|--|--|
payload	|String\ArrayBuffer|消息内容

#### 2.  属性说明
名称|类型|描述
--|--|--|
payloadString				|string		|只读 当负载的为utf-8字符时有效
payloadBytes				|ArrayBuffer|只读 负载的字节数
destinationName			|string		| 消息目标地,即主题,作为发送消息时必须设定
qos						|number		|消息的质量
retained					|Boolean	|是否持久化
duplicate					|Boolean	|只读,是否是重复消息
名称|类型|描述
--|--|--|
payload	|String\ArrayBuffer|消息内容
## 示例
```
    var host = '192.168.0.188',
        port = 8083,
        username= 'admin',
        password= 'public',
        clientId = 'client-js' + new Date().getTime();
    // clientId必须唯一,当存在clientId相同的连接时,会互相挤下线
    client = new Paho.MQTT.Client(host, port, clientId);
    // 失去连接时的回调
    client.onConnectionLost = function(res) {
        // 错误码为0,为正常断开
        if (res.errorCode !== 0) { 
            console.log("断开原因:" + res.errorMessage);
            console.log("连接已断开");
        }
    }
    // 接受到消息时
    client.onMessageArrived = function(msg) {
        console.log("消息内容:%s",msg.payloadString);
        console.log("消息质量:%s",msg.qos);
        alert('收到消息:' + msg.payloadString);
    }
    // 进行连接
    client.connect({
        userName:username,
        password:password,
        onSuccess: function() {
            console.log('连接成功');
            client.subscribe('test/#', {
                qos: 2,
                onSuccess:()=>{
                    var msg = new Paho.MQTT.Message("hello_world");
                    msg.destinationName = "test/World";
                    msg.qos = 0;
                    client.send(msg);
                }
            });
        }
    });
```
## 链接
[EMQ文档](http://www.emqtt.com/docs/v2/getstarted.html)  
[paho js API文档](https://www.eclipse.org/paho/files/jsdoc/Paho.MQTT.Client.html)  
[MQTT QOS等级订阅和发布的关系](https://blog.csdn.net/gamereborn/article/details/80211975)