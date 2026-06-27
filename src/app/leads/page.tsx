"use client";

import { useState, useEffect } from "react";
import { Trash2, User, Mail, Phone, Calendar, Lock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";

interface Lead {
  _id: string;
  fullname: string;
  email: string;
  phonenumber: string;
  message: string;
  createdAt: string;
}

export default function LeadsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [leadsError, setLeadsError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("yasirmunir_admin_token");
    if (token === "shaziamunir-auth-token") {
      setIsAuthenticated(true);
      fetchLeads();
    }
    setIsChecking(false);
  }, []);

  const fetchLeads = async () => {
    setLoadingLeads(true);
    setLeadsError("");
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (res.ok && data.success) {
        setLeads(data.leads || []);
      } else {
        setLeadsError(data.message || "Failed to fetch leads");
      }
    } catch (err) {
      setLeadsError("Failed to fetch leads from database");
    } finally {
      setLoadingLeads(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (username === "shaziamunir" && password === "shaziamunir") {
      localStorage.setItem("yasirmunir_admin_token", "shaziamunir-auth-token");
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("yasirmunir_admin_token");
    setIsAuthenticated(false);
    setLeads([]);
    setUsername("");
    setPassword("");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    try {
      const res = await fetch("/api/leads", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setLeads((prev) => prev.filter((lead) => lead._id !== id));
      } else {
        alert(data.message || "Failed to delete lead");
      }
    } catch (err) {
      alert("Failed to delete lead from database");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "N/A";

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeStr = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${timeStr} ${day}/${month}/${year}`;
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 pt-32">
        <div className="w-full max-w-md bg-card border rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col items-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-center">Leads Portal Access</h1>
            <p className="text-sm text-muted-foreground text-center mt-1">Please authenticate to access lead details</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3.5 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                placeholder="Enter password"
                required
              />
            </div>

            {loginError && (
              <div className="text-sm text-destructive font-medium text-center bg-destructive/10 py-2 rounded-lg">
                {loginError}
              </div>
            )}

            <Button type="submit" className="w-full py-2.5">
              Authenticate
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-6 pt-32 max-w-7xl mx-auto flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Leads Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage and view form submission contacts</p>
        </div>
        <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>

      {loadingLeads ? (
        <div className="flex-1 flex items-center justify-center py-20">
          <Loader />
        </div>
      ) : leadsError ? (
        <div className="text-center py-12 bg-destructive/10 rounded-2xl border border-destructive/20 text-destructive font-semibold">
          {leadsError}
        </div>
      ) : leads.length === 0 ? (
        <div className="text-center py-20 bg-muted/30 border border-dashed rounded-2xl">
          <p className="text-muted-foreground font-medium text-lg">No leads found in the database</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leads.map((lead) => (
            <div key={lead._id} className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-semibold leading-none">{lead.fullname}</h2>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-muted-foreground/70" />
                    <span className="truncate">{lead.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-muted-foreground/70" />
                    <span>{lead.phonenumber}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-muted-foreground/70" />
                    <span>{formatDate(lead.createdAt)}</span>
                  </div>
                </div>

                <div className="border-t pt-3 mt-3">
                  <p className="text-sm font-medium mb-1 text-foreground/80">Message</p>
                  <p className="text-sm leading-relaxed text-muted-foreground bg-muted/35 p-3 rounded-lg border border-muted/50 whitespace-pre-wrap max-h-40 overflow-y-auto">
                    {lead.message}
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-5">
                <Button
                  onClick={() => handleDelete(lead._id)}
                  variant="outline"
                  className="text-destructive border-destructive/20 hover:bg-destructive/10 hover:text-destructive flex items-center gap-2 px-3 py-1.5 h-auto text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
