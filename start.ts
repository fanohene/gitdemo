function testFile(test, path: string) {
    var actualFileName = 'test/' + path,
        expectedFileName = 'test/expected/' + path;
    var actual = grunt.file.read(actualFileName);
    var expected = grunt.file.read(expectedFileName);
    test.equal(expected, actual, 'Actual did not match expected:' + grunt.util.linefeed +
        actualFileName + grunt.util.linefeed +
        expectedFileName);
}