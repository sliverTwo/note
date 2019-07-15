## 安装jar包到本地
mvn install:install-file -Dfile=D:/taobao-sdk-java-auto-20160607.jar -DgroupId=com.ganshane.specs -DartifactId=taobao-sdk-java-auto-20160607 -Dversion=1.0.0 -Dpackaging=jar
## 指定字符编码
-Dfile.encoding=UTF-8
## 插件
```
	<!-- 排除指定的文件 -->
	<plugin>
		<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-war-plugin</artifactId>
		<version>3.2.2</version>
		<configuration>
			<packagingExcludes>
				%regex[WEB-INF/classes/dev/*.*],
				<!-- %regex[WEB-INF/lib/(?!lock-).*.*.jar] -->
			</packagingExcludes>
		</configuration>
	</plugin>
	<!-- 添加额外的资源文件夹 -->
	<plugin>
		<groupId>org.codehaus.mojo</groupId>
		<artifactId>build-helper-maven-plugin</artifactId>
		<version>1.8</version>
		<executions>
			<execution>
				<id>add-source</id>
				<phase>initialize</phase>
				<goals>
					<goal>add-source</goal>
				</goals>
				<configuration>
					<sources>
						<source>${basedir}/src/main/override</source>
					</sources>
				</configuration>
			</execution>
		</executions>
	</plugin>
```
