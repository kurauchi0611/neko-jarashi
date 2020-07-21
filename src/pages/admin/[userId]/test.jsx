import React from "react";
import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  console.log(router.query.userId);

  return <p>Test Page</p>;
}
