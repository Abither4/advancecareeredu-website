export const SITE = {
  name: "Advance Career Education",
  shortName: "ACE",
  tagline: "Your Road to a New Career Starts Here",
  phone: "817-864-8086",
  phoneTel: "tel:+18178648086",
  email: "contact@advancecareeredu.com",
  address: {
    street: "950 Trinity Drive",
    city: "Mansfield",
    state: "TX",
    zip: "76063",
    full: "950 Trinity Drive, Mansfield, TX 76063",
  },
  hours: "Monday - Friday, 8:00 AM - 5:00 PM",
  url: "https://advancecareeredu.com",
  calendly: "https://calendly.com/advancecareeredu",
  facebook: "https://www.facebook.com/advancecareeredu",
  google: {
    analyticsId: "G-8D4L9D297R",
    adsId: "", // TODO: Add Google Ads conversion ID (AW-XXXXXXX)
    verificationId: "4S6USzhdpHRrNlWGTXj5KMIrKVsG3UGlizb5cktVGhk",
  },
  miaWidget: {
    src: "https://advancecareeredu.joinlumion.com/iframe/miashare-v1.js",
    id: "ff6698c2-da77-4877-8533-30f0a2261f14",
  },
} as const;

export const PROGRAMS = [
  {
    slug: "cdl-class-a-training",
    name: "CDL Class A - 3 Week Day Program",
    shortName: "Class A Day",
    duration: "3 Weeks",
    schedule: "Monday - Friday, 8 AM - 5 PM",
    description:
      "Our comprehensive CDL Class A program prepares you for a career in commercial trucking. Includes ELDT theory, backing skills, road training, and DPS test preparation.",
    features: [
      "ELDT Theory & Behind-the-Wheel Training",
      "Pre-Trip Inspection Training",
      "Backing Skills (Straight, Offset, Parallel)",
      "Road Training & Highway Driving",
      "DPS CDL Skills Test Preparation",
      "Job Placement Assistance",
    ],
    classSchedule: "New classes start every Monday",
  },
  {
    slug: "cdl-class-a-evening",
    name: "CDL Class A - 3 Week Evening Program",
    shortName: "Class A Evening",
    duration: "3 Weeks",
    schedule: "Monday - Friday, 5 PM - 10 PM",
    description:
      "Same comprehensive CDL Class A training in an evening format. Perfect for those who need to keep working while training for their new career.",
    features: [
      "ELDT Theory & Behind-the-Wheel Training",
      "Pre-Trip Inspection Training",
      "Backing Skills (Straight, Offset, Parallel)",
      "Road Training & Highway Driving",
      "DPS CDL Skills Test Preparation",
      "Job Placement Assistance",
    ],
    classSchedule: "New classes start every Monday",
  },
  {
    slug: "cdl-class-b-training",
    name: "CDL Class B - 2 Week Program",
    shortName: "Class B",
    duration: "2 Weeks",
    schedule: "Monday - Friday, 8 AM - 5 PM",
    description:
      "Get your CDL Class B license in just 2 weeks. Ideal for careers in bus driving, delivery, and straight truck operations.",
    features: [
      "ELDT Theory Training",
      "Pre-Trip Inspection Training",
      "Backing Skills Training",
      "Road Training",
      "DPS CDL Skills Test Preparation",
      "Job Placement Assistance",
    ],
    classSchedule: "New classes start every Monday",
  },
] as const;

export const ADDITIONAL_SERVICES = [
  { name: "ELDT Theory Portal (Online)" },
  { name: "ELDT Hazmat Portal (Online)" },
  { name: "Tanker Endorsement" },
  { name: "Doubles & Triples Endorsement" },
  { name: "Restriction Removal (L or E)" },
  { name: "40-Hour CDL Refresher Program" },
] as const;

export const STATS = [
  { value: "856+", label: "5-Star Reviews" },
  { value: "97%", label: "Pass Rate" },
  { value: "19+", label: "Years Experience" },
  { value: "1000+", label: "Graduates Placed" },
] as const;

export const CREDENTIALS = [
  "Texas Workforce Commission Approved",
  "Federal Training Provider Registry",
  "Licensed Third Party CDL Testing",
  "ELDT Registered Training Provider",
] as const;

export const HIRING_COMPANIES = [
  "Werner Enterprises",
  "Swift Transportation",
  "Schneider",
  "J.B. Hunt",
  "KLLM Transport",
  "USA Truck",
  "CR England",
  "Covenant Transport",
  "Prime Inc.",
  "Heartland Express",
  "XPO Logistics",
  "FedEx Freight",
] as const;

export function getNextMondayDate(): string {
  const now = new Date();
  const day = now.getDay();
  const daysUntilMonday = day === 0 ? 1 : day === 1 ? 0 : 8 - day;
  const nextMonday = new Date(now);
  // If it's Monday and before 5 PM, show today. Otherwise, next Monday.
  if (day === 1 && now.getHours() < 17) {
    return nextMonday.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }
  nextMonday.setDate(now.getDate() + (daysUntilMonday || 7));
  return nextMonday.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
