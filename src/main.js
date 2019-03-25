import { app, BrowserWindow } from 'electron';

// import {Menu, MenuItem, dialog, ipcMain} from 'electron';
// import { appMenuTemplate } from './appmenu';

// 是否可以安全退出
// let safeExit = false;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
//   app.quit();
// }

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
  });

  // and load the index.html of the app.
  // mainWindow.loadURL(`http://pyyuqingv1-pro.pystandard.py/bond_opinions/#/`);
	mainWindow.loadURL('http://pyfinance2v2-pro.pystandard.py/PyPlatform/home.action/#/login');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  
  // 增加主菜单
  //   const menu = Menu.buildFromTemplate( appMenuTemplate );
	
	//在File菜单下添加名为New的子菜单
	// menu.items[0].submenu.append( new MenuItem({
     //    label: '新建',
     //    click(){
     //      mainWindow.webContents.send( 'action', 'new'); //点击后向主页渲染进程发送“新建文件”的命令
     //    },
     //    accelerator: 'CmdOrCtrl+N' //快捷键：Ctrl+N
	// }));
	
	//在New菜单后面添加名为Open的同级菜单
	// menu.items[0].submenu.append(new MenuItem({
	// 	label: "打开",
	// 	click(){
	// 		mainWindow.webContents.send('action', 'open'); //点击后向主页渲染进程发送“打开文件”的命令
	// 	},
	// 	accelerator: 'CmdOrCtrl+O' //快捷键：Ctrl+O
	// }));
	
	//再添加一个名为Save的同级菜单
	// menu.items[0].submenu.append(new MenuItem({
	// 	label: "保存",
	// 	click(){
	// 		mainWindow.webContents.send('action', 'save'); //点击后向主页渲染进程发送“保存文件”的命令
	// 	},
	// 	accelerator: 'CmdOrCtrl+S' //快捷键：Ctrl+S
	// }));
	
	//添加一个分隔符
	// menu.items[0].submenu.append(new MenuItem({
	// 	type: 'separator'
	// }));
	
	//再添加一个名为Exit的同级菜单
	// menu.items[0].submenu.append(new MenuItem({
	// 	role: 'quit'
	// }));
	
	// Menu.setApplicationMenu(menu);
	// mainWindow.on('close', (e) => {
	// 	if(!safeExit){
	// 		e.preventDefault();
	// 		mainWindow.webContents.send('action', 'exiting');
	// 	}
	// });
	
	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		mainWindow = null
	})
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

//监听与渲染进程的通信
// ipcMain.on( 'reqaction' , (event, arg) => {
//   switch (arg) {
//       case 'exit':
//         safeExit = true;
//         app.quit(); //退出程序
//         break;
//   }
// })