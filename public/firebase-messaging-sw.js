importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAFSAp2b_b1B26LgXx5fi-EGHeC2kDmQak",
    projectId: "team-neko",
    messagingSenderId: "1097440253507",
    appId: "1:1097440253507:web:235489d4e7d7235bf926f6",
  });
  const messaging = firebase.messaging();
  //background notifications will be received here
  // firebase.messaging().setBackgroundMessageHandler((payload) => console.log(‘payload’, payload));
  messaging.setBackgroundMessageHandler(function (payload) {
    var dataFromServer = JSON.parse(payload.data.notification);
    var notificationTitle = dataFromServer.title;
    var notificationOptions = {
      body: dataFromServer.body,
      icon: dataFromServer.icon,
      data: {
        url: dataFromServer.url
      }
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
  });

  self.addEventListener("notificationclick", function (event) {
    var urlToRedirect = event.notification.data.url;
    event.notification.close();
    event.waitUntil(self.clients.openWindow(urlToRedirect));
  });
}
