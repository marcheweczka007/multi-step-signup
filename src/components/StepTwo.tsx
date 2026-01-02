import React from "react";

export default function StepTwo({ formData, setFormData }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 2: Preferences</h2>

      <label className="block">
        <span className="text-sm text-gray-600">What are you here for?</span>
        <select
          className="mt-1 w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
          value={formData.goal}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, goal: e.target.value }))
          }
        >
          <option value="">Pick one</option>
          <option value="learn">Learn consistently</option>
          <option value="portfolio">Build a portfolio</option>
          <option value="confidence">Gain confidence</option>
        </select>
      </label>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={formData.newsletter}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, newsletter: e.target.checked }))
          }
        />
        <span className="text-sm text-gray-700">
          Send me gentle reminders (not spammy)
        </span>
      </label>
    </div>
  );
}

