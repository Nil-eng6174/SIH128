import Link from "next/link";
import { UserCircle, Stethoscope, Map, FlaskConical } from "lucide-react";

export default function Home() {
  const personas = [
    {
      title: "Farmer / Field Worker",
      description: "Report livestock symptoms, capture photos, and request assistance.",
      icon: UserCircle,
      href: "/report",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Veterinarian",
      description: "Manage reported cases, review AI triage scores, and recommend treatments.",
      icon: Stethoscope,
      href: "/vet",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Command Center (Official)",
      description: "View district-wide GIS map, outbreak alerts, and vaccination coverage.",
      icon: Map,
      href: "/command-center",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Laboratory",
      description: "Track sample chain-of-custody and publish diagnostic results.",
      icon: FlaskConical,
      href: "/lab",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to PashuShield</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select your role to access the platform. This prototype demonstrates the end-to-end workflow 
          from field reporting to government response.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {personas.map((persona) => {
          const Icon = persona.icon;
          return (
            <Link 
              href={persona.href} 
              key={persona.title}
              className="block p-6 bg-white border border-brand-secondary rounded-lg shadow-sm hover:shadow-md transition-shadow hover:border-brand-accent group"
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${persona.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">
                {persona.title}
              </h2>
              <p className="text-gray-600">
                {persona.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
