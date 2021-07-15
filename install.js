var Service = require('node-windows').Service;

console.log('Installing NodeServices as window service');
 
// Create a new service object
var svc = new Service({
  name:'NodeServices',
  description: 'NodeService to resolve any script for Feeds',
  script: require('path').join(__dirname,'index.js'),
  maxRetries: 10,
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  console.log('Process is available as a service.');
  console.log('Starting service ...');
  svc.start();
});
 
svc.install();

