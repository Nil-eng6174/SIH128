"use client";

import { useState } from "react";
import { Camera, MapPin, CheckCircle2, AlertTriangle } from "lucide-react";

export default function ReportForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission and AI triage
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  if (step === 3) {
    return (
      <div className="bg-white p-6 rounded-lg border border-brand-secondary text-center space-y-4 shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-heading">Report Submitted</h2>
        
        <div className="bg-orange-50 border border-brand-accent rounded-lg p-4 text-left mt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-accent">AI Triage Notice</h3>
              <p className="text-sm text-gray-700 mt-1">
                Based on symptoms (fever, mouth lesions), this case is flagged as <strong>Suspected Contagious Disease - High Risk</strong>.
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">* Veterinary confirmation required.</p>
            </div>
          </div>
        </div>
        
        <div className="pt-4 text-left">
          <h4 className="font-bold mb-2">Recommended Actions:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
            <li>Isolate affected animals immediately.</li>
            <li>Do not move any animals out of the herd.</li>
            <li>A veterinarian has been notified.</li>
          </ul>
        </div>
        
        <button 
          onClick={() => setStep(1)}
          className="mt-6 w-full py-2 bg-brand-primary text-brand-accent border border-brand-accent font-bold rounded-lg"
        >
          Submit Another Report
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-brand-secondary shadow-sm">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold font-heading">Livestock Health Report</h2>
        <span className="text-sm font-medium text-gray-500">Step {step} of 2</span>
      </div>

      <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2); } : handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Animal Type</label>
              <select className="w-full border border-gray-300 rounded-md p-2" required>
                <option value="">Select animal type</option>
                <option value="cow">Cattle (Cow/Bull)</option>
                <option value="buffalo">Buffalo</option>
                <option value="goat">Goat/Sheep</option>
                <option value="pig">Pig</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number Affected</label>
              <input type="number" min="1" className="w-full border border-gray-300 rounded-md p-2" placeholder="E.g., 3" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Symptoms Observed</label>
              <div className="space-y-2 mt-2">
                {["Fever", "Mouth Lesions", "Limping / Foot Sores", "Loss of Appetite", "Reduced Milk Yield"].map(sym => (
                  <label key={sym} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-brand-accent focus:ring-brand-accent" />
                    <span className="text-sm">{sym}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
                <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Tap to take photo or select from gallery</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <div className="flex gap-2">
                <input type="text" readOnly value="Lat: 19.0760, Lng: 72.8777" className="w-full border border-gray-300 bg-gray-50 rounded-md p-2 text-sm" />
                <button type="button" className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </>
        )}

        <div className="pt-4 flex gap-3">
          {step === 2 && (
            <button 
              type="button" 
              onClick={() => setStep(1)}
              className="flex-1 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200"
            >
              Back
            </button>
          )}
          <button 
            type="submit" 
            disabled={loading}
            className="flex-1 py-2 bg-brand-accent text-white font-bold rounded-lg hover:opacity-90 flex justify-center items-center transition-opacity"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              step === 1 ? "Next" : "Submit Report"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
