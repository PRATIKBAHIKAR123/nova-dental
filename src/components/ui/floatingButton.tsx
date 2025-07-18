"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";

export default function FloatingTextForm() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle submission
    alert("Form submitted!");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pb-[env(safe-area-inset-bottom)]">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="w-14 h-14 bg-primary hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition animate-bounce" aria-label="Text us">
            <MessageCircle className="w-6 h-6" />
          </button>
        </DialogTrigger>

        <DialogContent className="max-w-md px-0 py-0">
          <DialogHeader className="bg-primary text-white px-6 py-4 rounded-t-lg">
            <h3 className="text-xl font-semibold">We’ll text you</h3>
            <p className="text-sm mt-1">Enter your info and we’ll text you shortly.</p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium">Select a location</label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bloomfield">Bloomfield Avenue Newark</SelectItem>
                  <SelectItem value="downtown">Downtown Newark</SelectItem>
                  <SelectItem value="east-orange">Park Ave East Orange</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Patient type */}
            <div>
              <label className="block text-sm font-medium">New or returning patient?</label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="New or returning patient?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New Patient</SelectItem>
                  <SelectItem value="returning">Returning Patient</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name */}
            <div className="flex gap-2">
              <Input required placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>

            {/* Mobile */}
            <Input required type="tel" placeholder="Mobile number" />

            {/* Email */}
            <Input required type="email" placeholder="Email address" />

            {/* Message */}
            <Textarea placeholder="Send a message..." className="resize-none" rows={3} />

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-2">
              By clicking Send, I agree to the{" "}
              <a href="/privacy" className="underline">Privacy Policy</a> and{" "}
              <a href="/terms" className="underline">Terms of Use</a>, and I consent to receiving text messages from this practice acknowledging that data rates may apply. Message frequency varies.
            </p>

            <Button type="submit" className="w-full hover:bg-black">
              Send
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}