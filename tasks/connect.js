/**
 * @file
 * @author Albert Cyberhulk
 * @date 05/10/15
 */

// The actual grunt server settings
module.exports = {
  options: {
    port: 9000,
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: 'localhost',
    livereload: 35729,
    base: {
      path: '<%= project.dev %>',
        options: {
          index: 'index.html'
        }
    }
  },
  livereload: {
    options: {
      open: true,
      base: [
        '<%= project.dev %>'
      ]
    }
  }
};
