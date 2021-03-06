/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  var ngVer = '@2.0.0-rc.6'; // lock in the angular package version; do not let it float to current!
  var routerVer = '@3.0.0-rc.2'; // lock router version
  var routerDeprecatedVer = '@2.0.0-rc.2'; // temporarily until we update all the guides

  //map tells the System loader where to look for things
  var map = {
    'app':                        'app',

    '@angular':                   'https://unpkg.com/@angular', // sufficient if we didn't pin the version
    '@angular/router':            'https://unpkg.com/@angular/router' + routerVer,
    '@angular/router-deprecated': 'https://unpkg.com/@angular/router-deprecated' + routerDeprecatedVer,
    'angular2-in-memory-web-api': 'https://unpkg.com/angular2-in-memory-web-api', // get latest
    'rxjs':                       'https://unpkg.com/rxjs@5.0.0-beta.11',
    'ts':                         'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                 'https://unpkg.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
 };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade',
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = 'https://unpkg.com/@angular/' + pkgName + ngVer;
  });

  // Add package entries for angular packages
  ngPackageNames.concat(['router', 'router-deprecated']).forEach(function(pkgName) {

    // Bundled (~40 requests):
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js' };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
