### 1.常见的日志组件
名称|jar包|描述
---|--|--
log4j|log4j-1.2.17|早期常用的日志组件
logback|logback-core,loback-classic,logbacl-access|一套日志组件的实现,性能优于log4j
log4j2|log4j,log4j-api,log4j-core|Apache开发的一款log4j的升级产品
java.util.logging|jdk|jdk1.4自带的日志实现

### 2. SLF4J

- SLF4J 全称 Simple Logging Facade for Java(简单日志门面)。与JCL类似，本身不替供日志具体实现，只对外提供接口或门面。因此它不是具体的日志解决方案，而是通过Facade Pattern门面模式对外提供一些Java Logging API。  
* 这些对外提供的核心API其实就是一些接口以及一个LoggerFactory的工厂类。	在使用SLF4J的时候，不需要在代码中或配置文件中指定你打算使用哪个具体的日志系统，可以在部署的时候不修改任何配置即可接入一种日志实现方案，在编译时静态绑定想用的Log库。  
* 按照官方的说法，SLF4J是一个用于日志系统的简单Facade，允许最终用户在部署其应用时使用其所希望的日志系统。作者创建SLF4J的目的是为了替代Apache Commons Logging。即使以后又出现更新的其他日志组件，也能完全适应。
* 使用SLF4J时，如果你需要使用某一种日志实现，那么你选择相对应的SLF4J的桥接包即可。比如使用log4j日志组件，就选slf4j-log4j12桥接包，业务中就可以使用log4j进行底层日志输出。  

日志组件|sf4j桥接包
---|--
log4j| slfj-log4j12.jar
slf4j-jdk14.jar|jdk Looging
sIf4j-jcl.jar|jcl(log4j,jkd14,simpleLog)
log4j-slf4j-impl|log4j2
logback-classic|logback


### 参考
1. [10分钟搞定--混乱的 Java 日志体系](https://www.jianshu.com/p/39ced06944a2)