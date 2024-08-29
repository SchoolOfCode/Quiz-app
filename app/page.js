import Image from "next/image";
import page from "./page.css";
import React from "react";

import QuestionCards from "./src/components/QuestionCards/QuestionCards";

export default function Home() {
  return (
    <main>
      <QuestionCards/>
    </main>
  );
}
