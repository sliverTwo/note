## 内置常量
1. 默认常量存放地: com.jfinal.core.Const

常量|说明|默认值
--|--|--|
JFINAL_VERSION|jfinal版本号|根据版本变化
DEFAULT_VIEW_TYPE|默认的视图类型,默认为jfinal自带的enjoy模版|ViewType.JFINAL_TEMPLATE
DEFAULT_BASE_UPLOAD_PATH|默认基础上传路径|upload
DEFAULT_BASE_DOWNLOAD_PATH|默认基础下载路径|download
DEFAULT_ENCODING|默认编码|UTF-8
DEFAULT_DEV_MODE|开发者模式|false
DEFAULT_URL_PARA_SEPARATOR|默认参数分隔符|-
DEFAULT_VIEW_EXTENSION|默认视图后缀|.html
DEFAULT_MAX_POST_SIZE|post请求最大size|1024 * 1024 * 10（10M）
DEFAULT_I18N_MAX_AGE_OF_COOKIE|国际化cookie存储时间|999999999
DEFAULT_FREEMARKER_TEMPLATE_UPDATE_DELAY|freemarker模版延迟更新的时间,在非开发模式下有效|3600
DEFAULT_TOKEN_NAME|token名称|_jfinal_token
DEFAULT_SECONDS_OF_TOKEN_TIME_OUT|token过期时间|900(15min)
MIN_SECONDS_OF_TOKEN_TIME_OUT|最短token过期时间|300
DEFAULT_CONTROLLER_FACTORY|默认的controller工厂|ControllerFactory()
DEFAULT_CONFIG_PLUGIN_ORDER|1. 配置 configPlugin(Plugins me) 在 JFinalConfig 中被调用的次序. <br>2. 取值 1、2、3、4、5 分别表示在 configConstant(..)、configRoute(..)、configEngine(..)、configInterceptor(..)、configHandler(...).  之后被调用,<br>3. 默认值为 2，那么 configPlugin(..) 将在 configRoute(...) 调用之后被调用|2

2. jfinal常量配置

常量|说明|默认值
--|--|--|
devMode|开发者模式|false
baseUploadPath|文件上传路径|upload
baseDownloadPath|文件下载路径|download
encoding|编码格式|UTF-8
urlParaSeparator|url中参数分隔符|-
viewType|视图类型|JFINAL_TEMPLATE(enjoy)
viewExtension|视图后缀|.html
maxPostSize|post请求最大size|1024 * 1024 * 10（10M）
freeMarkerTemplateUpdateDelay|freemarker模版延迟更新的时间,在非开发模式下有效|3600
controllerFactory|控制器工厂|ControllerFactory()
configPluginOrder|1. 配置 configPlugin(Plugins me) 在 JFinalConfig 中被调用的次序. <br>2. 取值 1、2、3、4、5 分别表示在 configConstant(..)、configRoute(..)、configEngine(..)、configInterceptor(..)、configHandler(...).  之后被调用,<br>3. 默认值为 2，那么 configPlugin(..) 将在 configRoute(...) 调用之后被调用|2

## 源码包结构说明
1. com.jfinal.aop AOP相关，使用的时cflib技术
2. com.jfinal.captcha 验证码相关
3. com.jfinal.config 配置相关,常量、Handler、拦截器、插件、路由
4. com.jfinal.core.* jfinal核心控制器相关
5. com.jfinal
## 注意事项
1. jfinal DB.batchSave 保存的字段是list中的第一个model中包含的字段,若list中model的对象存在的字段不同，则需做处理。