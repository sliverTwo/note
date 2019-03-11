## Spring Cloud用到的组件
1. Eureka 注册中心,负责维护各个服务的地址列表(服务发现)
```
	Eureka Client：负责将这个服务的信息注册到Eureka Server中
	Eureka Server：注册中心，里面有一个注册表，保存了各个服务所在的机器和端口号
```
2. Feign 负责接口远程调用,使用动态代理技术
3. Ribbon 负载均衡
4. Hystrix 隔离、熔断和降级
```
	隔离: 将请求不同服务的线程隔离。
	熔断: 对异常服务采用一些策略减少网络延迟(如在一段时间内直接返回失败)
	降级: 请求的服务异常后的补救措施(如记录日志,待服务恢复后将数据恢复)
```
5. Zuul 网关,对请求进行统一处理分发,对前端请求隐藏微服务细节

[Spring Cloud底层原理](https://mp.weixin.qq.com/s?__biz=MjM5NzMyMjAwMA==&mid=2651482754&idx=1&sn=f9cfb4c5b978bfb8a470cd3df0eb487c&chksm=bd2506fd8a528feb330cd9c2a8eb8321ded24e7c6a73277c9ba67bd96c8d9061fe178842015c&scene=0&xtrack=1&key=b3428d2c029cbd732122fa9e186b74bc637d48b9d4fe84b1854d2c1a04398c9aafd4208b80a073f3af938d20189c4dba56583216fa80998ad1d2440d42abced9292379af349516cb40740fc01caebd4e&ascene=1&uin=MTQwNzUzNTMxMw%3D%3D&devicetype=Windows+10&version=62060728&lang=zh_CN&pass_ticket=Z9K1326Gw5xapC4cawFJn1kawqdmxlrQ%2Be%2FR6Gm%2B7D%2BrdAtmaB%2BJ%2FVWr4n6zfdaf)