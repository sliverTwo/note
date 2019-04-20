### 源码包结构说明
1. com.jfinal.aop AOP相关，使用的时cflib技术
2. com.jfinal.captcha 验证码相关
3. com.jfinal.config 配置相关,常量、Handler、拦截器、插件、路由
4. com.jfinal.core.* jfinal核心控制器相关
5. com.jfinal
## 注意事项
1. jfinal DB.batchSave 保存的字段是list中的第一个model中包含的字段,若list中model的对象存在的字段不同，则需做处理。