const gulp = require('gulp');

gulp.task('expressions', function() {
  let expressions = {};
  for (let i = 1; i <= 31; i++) {
      expressions[i] = (`$\\sqrt{${(i+1)**2}}-\\sqrt{1}\\$`);
  }
  require('fs').writeFileSync('expressions.json', JSON.stringify(expressions, 0, 2));
});
