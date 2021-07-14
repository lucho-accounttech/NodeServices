## run pm2 on windows startup

npm install pm2 -g
npm install pm2-windows-startup -g
pm2-startup install
pm2 start index.js --name NodeServices
pm2 save


reboot
pm2 ls