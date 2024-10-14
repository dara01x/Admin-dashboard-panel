import React from "react";

interface MainContentProps {
  title: string;
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ title, children }) => (
  <main className="p-6 bg-gray-100 min-h-full">
    <h2 className="text-2xl font-bold mb-4 text-gray-700">{title}</h2>
    <div className="text-gray-600">{children}</div>
  </main>
);

export default MainContent;
