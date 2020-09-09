import React from "react";
import App from "../components/App";
import { messaging } from "../plugins/firebase";
import { fcmServerKey } from "../lib/config";

export default function About() {
  // if (typeof navigator !== "undefined") {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("./firebase-messaging-sw.js")
  //       .then(function (registration) {
  //         console.log("Service Worker Registered");
  //         messaging.useServiceWorker(registration);
  //       });
  //   }
  // }
  const [unchi, setUnchi] = React.useState("");
  let token = "";
  if (typeof Notification !== "undefined") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // 通知を許可した場合
        console.log("Notification permission granted.");

        messaging.getToken().then((currentToken) => {
          if (currentToken) {
            // トークン取得成功
            console.log("currentToken:");
            console.log(currentToken);

            token = currentToken;
            setUnchi(token);
          } else {
            // トークン取得失敗
          }
        });
      } else {
        // 通知を拒否した場合
        console.log("Unable to get permission to notify.");
      }
    });
  }

  // fetchする際のオプション
  // headerにサーバーキーを指定する
  // サーバーキーはFirebaseコンソール > 設定 > クラウド メッセージング で確認できる
  const fcmTest = () => {
    const url = "https://fcm.googleapis.com/fcm/send";
    const payload = {
      to: token,
      notification: {
        title: "FCMテスト",
        body: "FCMテストです。表示されれば成功です。",
        url: "/",
      },
    };
    const opts = {
      method: "post",
      headers: {
        Authorization: `key=${fcmServerKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    setTimeout(() => {
      fetch(url, opts).then((res) => console.log(res.status));
    }, 5000);
  };

  return (
    <App>
      <p>fcm test Page</p>
      {unchi}
      <button onClick={fcmTest}>テスト</button>
    </App>
  );
}
