module.exports = function (grunt) {

    var hosted = grunt.option('hosted'),
        pwa    = grunt.option('pwa'),
        tasks  = [
            'clean:dist',
            'ngtemplates',
            'useminPrepare',
            'compass:dist',
            'concat',
            'copy:dist',
            'cssmin',
            'uglify',
            'usemin',
            'template:dist'
        ];

    if (pwa) {
        tasks.push('copy:pwa', 'serviceworker');
    }

    if (hosted) {
        tasks.push('hosted');
    }

    grunt.registerTask('build', tasks);
};