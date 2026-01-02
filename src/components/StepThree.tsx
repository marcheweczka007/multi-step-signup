import React from "react";

export default function StepThree({ formData }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 3: Confirm</h2>

      <div className="rounded-lg border border-gray-200 p-4 text-sm text-gray-700 space-y-2">
        <p><span className="font-medium">Name:</span> {formData.firstName || "—"}</p>
        <p><span className="font-medium">Email:</span> {formData.email || "—"}</p>
        <p><span className="font-medium">Goal:</span> {formData.goal || "—"}</p>
        <p><span className="font-medium">Reminders:</span> {formData.newsletter ? "Yes" : "No"}</p>
      </div>

      <p className="text-sm text-gray-500">
        If this looks good, hit submit ✨
      </p>
    </div>
  );
}
