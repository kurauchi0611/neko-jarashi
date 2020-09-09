import React from "react";
import { useRouter } from "next/router";
import App from "../../../components/Admin/App";

export default function Test() {
  const router = useRouter();
  console.log(router.query.userId);

  return (
    <App>
      <p>Test Page</p>
    </App>
  );
}
