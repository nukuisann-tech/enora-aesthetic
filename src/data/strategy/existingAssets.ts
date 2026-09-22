// Existing website asset leverage (brief §34) — what the site the user
// already commissioned is for, in the growth model, and what it hands
// off to next.
export type AssetRole = {
  name: string;
  role: string;
  next: string;
};

export const existingAssets: AssetRole[] = [
  { name: "Concerns", role: "Discovery / Self Understanding", next: "Selective Beauty Map" },
  { name: "Journal", role: "Education", next: "Nurture" },
  { name: "Treatments", role: "Decision Information", next: "Consultation" },
  { name: "Price", role: "Trust / Expectation", next: "Consultation" },
  { name: "First Visit", role: "Anxiety Reduction", next: "Booking" },
  { name: "Consultation Brief", role: "Qualification / Better Conversation", next: "Clinic Operations" },
  { name: "Philosophy", role: "Brand Fit", next: "Trust" },
];
