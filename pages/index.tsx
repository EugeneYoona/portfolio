import React from "react";
import MainLayout from "../components/common/layout";

export default function Home() {
  return (
    <main className="no-scrollbar h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <MainLayout currentPage="_hello">
        <h1>Page One</h1>
      </MainLayout>
      <MainLayout currentPage="_about-me">
        <h1>Page Two</h1>
      </MainLayout>
      <MainLayout currentPage="_projects">
        <h1>Page Three</h1>
      </MainLayout>
      <MainLayout currentPage="_contact-me">
        <h1>Page Four</h1>
      </MainLayout>
    </main>
  );
}
