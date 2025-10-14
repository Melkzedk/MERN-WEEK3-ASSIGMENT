import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Home</h1>

      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>

      <Card title="Example Card">
        <p>This is some card content. Use the Card component to wrap boxed content.</p>
      </Card>
    </div>
  );
}
