import React from "react";

export default function StepOne({ formData, setFormData }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Step One: About you</h2>

      <label className="block text-sm font-light text-gray-800">
        <span className="text-sm text-gray-600">First Name</span>
        <input
          className="mt-1 w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
          value={formData.firstName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, firstName: e.target.value }))
          }
          placeholder="e.g. Zu"
        />
      </label>

      <label className="block text-sm font-light text-gray-800">
        <span className="text-sm text-gray-600">Email</span>
        <input
          type="email"
          className="mt-1 w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="you@example.com"
        />
      </label>
    </div>
  );
}
