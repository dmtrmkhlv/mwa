import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./page";
import { LoginPage } from "./page/LoginPage";
import { SignUpPage } from "./page/SignUpPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};
