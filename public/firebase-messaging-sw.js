importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');
if (!firebase.apps.length) {
  firebase.initializeApp({
    messagingSenderId: '1097440253507'
  });
  const messaging = firebase.messaging();
  //background notifications will be received here
  // firebase.messaging().setBackgroundMessageHandler((payload) => console.log(‘payload’, payload));
  messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
}
