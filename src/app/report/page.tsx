import ReportForm from "@/components/ReportForm";

export default function ReportPage() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold font-heading text-foreground mb-2">Report a Case</h1>
        <p className="text-gray-600">
          Enter details about sick or deceased livestock. Your report helps detect potential disease outbreaks early.
        </p>
      </div>
      <ReportForm />
    </div>
  );
}
