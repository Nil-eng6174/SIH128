"use client";

import { useState } from "react";
import { AlertTriangle, Clock, MapPin, Search } from "lucide-react";

export default function VetDashboard() {
  const [cases] = useState([
    {
      id: "CASE-8942",
      risk: "High",
      category: "Suspected Contagious",
      symptoms: ["Fever", "Mouth Lesions"],
      location: "Village A, Block 1",
      time: "10 mins ago",
      animals: "3 Cows"
    },
    {
      id: "CASE-8941",
      risk: "Medium",
      category: "Undiagnosed",
      symptoms: ["Reduced Milk Yield", "Loss of Appetite"],
      location: "Village B, Block 1",
      time: "1 hour ago",
      animals: "1 Buffalo"
    },
    {
      id: "CASE-8940",
      risk: "Low",
      category: "Injury / Localized",
      symptoms: ["Limping"],
      location: "Village A, Block 2",
      time: "2 hours ago",
      animals: "1 Goat"
    }
  ]);

  return (
    <div className="max-w-5xl mx-auto py-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Veterinary Triage Queue</h1>
          <p className="text-gray-600">Review reported cases and assign actions.</p>
        </div>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search cases..." 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {cases.map((c) => (
          <div key={c.id} className="bg-white p-5 rounded-lg border border-brand-secondary shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm font-bold text-gray-500">{c.id}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  c.risk === "High" ? "bg-red-100 text-red-700" :
                  c.risk === "Medium" ? "bg-orange-100 text-orange-700" :
                  "bg-green-100 text-green-700"
                }`}>
                  {c.risk} Risk
                </span>
                <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                  {c.animals}
                </span>
              </div>
              
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                {c.risk === "High" && <AlertTriangle className="w-5 h-5 text-red-500" />}
                {c.category}
              </h3>
              
              <p className="text-sm text-gray-600 mb-2">
                <strong>Symptoms:</strong> {c.symptoms.join(", ")}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {c.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {c.time}</span>
              </div>
            </div>

            <div className="flex md:flex-col gap-2 shrink-0">
              <button className="flex-1 py-1.5 px-4 bg-brand-primary text-brand-accent border border-brand-accent font-medium rounded hover:bg-orange-50 transition-colors text-sm">
                Request Lab Sample
              </button>
              <button className="flex-1 py-1.5 px-4 bg-white text-gray-700 border border-gray-300 font-medium rounded hover:bg-gray-50 transition-colors text-sm">
                Assign Field Worker
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
