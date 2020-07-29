import React from "react";
import QuestionPage from "./components/QuestionPage";
import UserData from "./components/UserData";
import "./tailwind.output.css";
import Layout from "./components/layout";

export default function App() {
  return (
    <div>
      <Layout>
        <UserData />
        <QuestionPage />
      </Layout>
    </div>
  );
}
