import Image from "next/image";
import page from "./page.css";
import React from "react";

import QuestionCards from "./src/components/QuestionCards/QuestionCards";
import SubHeader from "./src/components/SubHeader/SubHeader";

export default function Home() {
  return (
    <main>
      <QuestionCards/>
    </main>
  );
}
