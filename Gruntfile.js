// 包装函数

module.exports = function(grunt){
	// 给grunt添加配置,所有插件的配置信息
	 grunt.initConfig({
	 	pkg: grunt.file.redJSON('package.json'),
	 })
}