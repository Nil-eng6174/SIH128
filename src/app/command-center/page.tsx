"use client";

import dynamic from "next/dynamic";
import { AlertCircle, Activity, ShieldCheck, Users } from "lucide-react";

// Dynamically import map to avoid SSR issues with Leaflet
const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">Loading Map...</div>
});

export default function CommandCenter() {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)] gap-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Command Center</h1>
          <p className="text-gray-600">District-wide livestock health surveillance and outbreak detection.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-brand-secondary shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Activity className="w-6 h-6"/></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Cases</p>
            <p className="text-2xl font-bold text-gray-900">142</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-lg"><AlertCircle className="w-6 h-6"/></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Outbreak Alerts</p>
            <p className="text-2xl font-bold text-red-600">1</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-brand-secondary shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-lg"><ShieldCheck className="w-6 h-6"/></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Vaccination Cov.</p>
            <p className="text-2xl font-bold text-gray-900">76%</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-brand-secondary shadow-sm flex items-center gap-4">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-lg"><Users className="w-6 h-6"/></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Field Workers</p>
            <p className="text-2xl font-bold text-gray-900">24</p>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[400px]">
        <div className="lg:col-span-2 bg-white rounded-lg border border-brand-secondary shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-brand-secondary bg-gray-50">
            <h2 className="font-bold font-heading">Geospatial Disease Map</h2>
          </div>
          <div className="flex-1 relative z-0">
            <MapWithNoSSR />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-brand-secondary shadow-sm flex flex-col">
          <div className="p-4 border-b border-brand-secondary bg-gray-50">
            <h2 className="font-bold font-heading text-red-600 flex items-center gap-2">
              <AlertCircle className="w-5 h-5"/>
              Emerging Alerts
            </h2>
          </div>
          <div className="p-4 flex-1 overflow-y-auto space-y-4">
            
            <div className="border border-red-200 bg-red-50 p-3 rounded-md">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-bold bg-red-200 text-red-800 px-2 py-0.5 rounded">High Risk</span>
                <span className="text-xs text-red-500">Just now</span>
              </div>
              <h3 className="font-bold text-red-900 text-sm">Cluster Detected: Village A</h3>
              <p className="text-xs text-red-700 mt-1">4 cases of suspected contagious disease reported within 3km in the last 48 hours.</p>
              <button className="mt-2 w-full text-xs font-bold py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition">
                Review & Intervene
              </button>
            </div>

            <div className="border border-orange-200 bg-orange-50 p-3 rounded-md">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-bold bg-orange-200 text-orange-800 px-2 py-0.5 rounded">Warning</span>
                <span className="text-xs text-orange-500">2 hrs ago</span>
              </div>
              <h3 className="font-bold text-orange-900 text-sm">Low Vaccination Coverage</h3>
              <p className="text-xs text-orange-700 mt-1">Block 3 shows &lt;40% FMD vaccination coverage heading into peak season.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
