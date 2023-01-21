import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage, LoginPage, SignUpPage, TestPage } from "./page";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};
