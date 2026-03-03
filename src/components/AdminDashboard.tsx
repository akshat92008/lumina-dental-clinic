import { useState, useEffect } from "react";
import { Users, Calendar, Mail, FileText, LayoutDashboard, Copy, Trash2, ArrowLeft } from "lucide-react";

interface Appointment {
    id: number;
    name: string;
    email: string;
    phone: string;
    date: string;
    service: string;
    message: string;
    status: string;
    created_at: string;
}

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: string;
    created_at: string;
}

export default function AdminDashboard() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"appointments" | "contacts">("appointments");

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/admin/leads");
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setAppointments(data.appointments || []);
            setContacts(data.contacts || []);
        } catch (error) {
            console.error("Error fetching admin leads:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
        }).format(date);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 absolute inset-0 z-[100] overflow-y-auto">
            {/* Admin Header */}
            <header className="bg-brand-navy text-white sticky top-0 z-10 shadow-md">
                <div className="container-custom py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <LayoutDashboard className="w-6 h-6 text-brand-teal" />
                        <span className="font-display font-bold space-x-1">
                            <span>Lumina</span>
                            <span className="text-brand-teal">Admin</span>
                        </span>
                    </div>
                    <button
                        onClick={() => window.location.hash = ""}
                        className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Site
                    </button>
                </div>
            </header>

            <main className="container-custom py-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Clinic Dashboard</h1>
                        <p className="text-slate-500">View and manage patient leads and contact requests.</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveTab("appointments")}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "appointments"
                                ? "bg-brand-teal text-brand-navy shadow-md shadow-brand-teal/20"
                                : "bg-white text-text-muted border border-brand-light hover:bg-brand-light"
                                }`}
                        >
                            Appointments ({appointments.length})
                        </button>
                        <button
                            onClick={() => setActiveTab("contacts")}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "contacts"
                                ? "bg-brand-navy text-white shadow-md"
                                : "bg-white text-text-muted border border-brand-light hover:bg-brand-light"
                                }`}
                        >
                            Messages ({contacts.length})
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="w-full h-64 flex items-center justify-center bg-white rounded-2xl border border-brand-light shadow-sm">
                        <svg className="animate-spin h-8 w-8 text-brand-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        {activeTab === "appointments" ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm whitespace-nowrap">
                                    <thead className="bg-brand-light border-b border-brand-light text-text-muted font-medium">
                                        <tr>
                                            <th className="px-6 py-4">Patient</th>
                                            <th className="px-6 py-4">Contact</th>
                                            <th className="px-6 py-4">Requested Date</th>
                                            <th className="px-6 py-4">Service</th>
                                            <th className="px-6 py-4">Received On</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {appointments.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                                    No appointment requests found.
                                                </td>
                                            </tr>
                                        ) : (
                                            appointments.map((apt) => (
                                                <tr key={apt.id} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="font-medium text-slate-900">{apt.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-slate-900">{apt.phone}</div>
                                                        <div className="text-slate-500 text-xs">{apt.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-teal/10 text-brand-teal font-medium">
                                                            <Calendar className="w-3.5 h-3.5" />
                                                            {apt.date}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">{apt.service}</td>
                                                    <td className="px-6 py-4 text-slate-500">{formatDate(apt.created_at)}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm whitespace-nowrap">
                                    <thead className="bg-brand-light border-b border-brand-light text-text-muted font-medium">
                                        <tr>
                                            <th className="px-6 py-4">Name</th>
                                            <th className="px-6 py-4">Contact</th>
                                            <th className="px-6 py-4 text-wrap min-w-[300px]">Message</th>
                                            <th className="px-6 py-4">Received On</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {contacts.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                                    No contact messages found.
                                                </td>
                                            </tr>
                                        ) : (
                                            contacts.map((msg) => (
                                                <tr key={msg.id} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="font-medium text-slate-900">{msg.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-slate-900">{msg.email}</div>
                                                        {msg.phone && <div className="text-slate-500 text-xs">{msg.phone}</div>}
                                                    </td>
                                                    <td className="px-6 py-4 text-wrap">
                                                        <div className="bg-slate-50 rounded-lg p-3 text-slate-700 whitespace-pre-wrap max-w-xl text-xs border border-slate-200">
                                                            {msg.message}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-500">{formatDate(msg.created_at)}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
