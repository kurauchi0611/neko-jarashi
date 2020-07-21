import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router.query.userId);

  return <p>Index Page</p>;
}
