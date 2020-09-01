import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import "firebase/messaging";
import {
  firebaseConfig
} from "../lib/config"

// const firebaseApp = firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().enablePersistence().catch(err => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
}

// Push通知をサポートしているかをチェック
// サポートしていないと、firebase.messaging()を呼んだときに例外が発生
// const isSupported = firebase.messaging.isSupported();

// // コンソールで発行した、ウェブプッシュ証明書の鍵ペアを取得
// const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
// if (!!publicVapidKey && process.client && !!isSupported) {
//   // FCMの初期化。鍵ペアを設定する
//   const messaging = firebase.messaging();
//   messaging.usePublicVapidKey(publicVapidKey);

//   // @nuxtjs/pwaが生成するsw.jsと、
//   // 後で作成するFCM受信処理用のsw-firebase-messaging.jsを統合するための設定
//   navigator.serviceWorker
//     .register("/sw.js")
//     .then(registration => messaging.useServiceWorker(registration))
//     .catch(err => console.error(err));
// }
let Messaging;
// let Notification;
if (process.browser) {
  Messaging = firebase.messaging();
  // Notification = firebase.notification();
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.app().functions("asia-northeast1");
export const storage = firebase.storage();
export const talkStorage = firebase.app().storage("gs://amitus-99097");
export const FieldValue = firebase.firestore.FieldValue;
// export const messaging = firebase.messaging();
export const messaging = Messaging
// export const notification = Notification
