// 包装函数

module.exports = function(grunt){
	// 给grunt添加配置,所有插件的配置信息
	 grunt.initConfig({
	 	pkg: grunt.file.redJSON('package.json'),
	 	uglify: {
	 		build: {
                 beautify: false,
                 mangle:true,
                 compress: true
	 		},
	 		files: [{
	 			'build/msgbox.min.js': ['src/msgbox.js']
	 		}]
	 	},

	 	jshint: {
            options:
               eqeqeq:true,
               trailing:true
            files: ['src/msgbox.js'],
	 	},

	 	wacth: {
	 		another: {
	 			files: ['src/*.js']
                tasks: [jshint,uglify] 
                options: {
                	livereload: 1377
                }  
	 		}
	 	}
	 })

	 grunt.loadNpmTasks('grunt-contrib-uglify');
	 grunt.loadNpmTasks('grunt-contrib-jshint');
	 grunt.loadNpmTasks('grunt-contrib-wacth');
	 grunt.registerTask('default',['uglify']);
};