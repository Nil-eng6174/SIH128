import { CheckCircle2, Clock, FlaskConical, Microscope } from "lucide-react";

export default function LabDashboard() {
  const samples = [
    {
      id: "SPL-9021",
      caseId: "CASE-8942",
      type: "Blood Serum",
      status: "In Transit",
      date: "Today, 10:30 AM",
      icon: Clock,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      id: "SPL-9020",
      caseId: "CASE-8938",
      type: "Tissue Swab",
      status: "Testing",
      date: "Yesterday, 2:15 PM",
      icon: Microscope,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      id: "SPL-9015",
      caseId: "CASE-8910",
      type: "Blood Serum",
      status: "Resulted - Positive (FMD)",
      date: "Aug 22, 11:00 AM",
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-100",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Laboratory Portal</h1>
          <p className="text-gray-600">Track sample chain-of-custody and update test results.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-brand-secondary shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-brand-secondary font-bold text-gray-700 grid grid-cols-5 gap-4">
          <div className="col-span-1">Sample ID</div>
          <div className="col-span-1">Case Ref</div>
          <div className="col-span-1">Type</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {samples.map((sample) => {
            const Icon = sample.icon;
            return (
              <div key={sample.id} className="p-4 grid grid-cols-5 gap-4 items-center hover:bg-gray-50 transition-colors">
                <div className="font-mono text-sm font-bold text-gray-900">{sample.id}</div>
                <div className="font-mono text-sm text-gray-500">{sample.caseId}</div>
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-gray-400" />
                  {sample.type}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${sample.bg} ${sample.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {sample.status}
                  </span>
                </div>
                <div className="text-right">
                  <button className="text-sm font-bold text-brand-accent hover:text-orange-700 transition">
                    Update
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
