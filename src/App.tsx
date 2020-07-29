import React, { useState } from "react";
import QuestionPage from "./components/QuestionPage";
import UserData from "./components/UserData";
import "./tailwind.output.css";
import Layout from "./components/layout";

export default function App() {
  // eslint-disable-next-line
  const [registered, setRegistered] = useState(true);

  return (
    <div>
      <Layout>{!registered ? <UserData /> : <QuestionPage />}</Layout>
    </div>
  );
}
