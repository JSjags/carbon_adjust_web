import {
  ApplicationsIcon,
  CarbonCreditIcon,
  ContactIcon,
  DashboardIcon,
  DevicesIcon,
  DocumentCentreIcon,
  InboxIcon,
  JPGIcon,
  LogoutIcon,
  PDFIcon,
  PNGIcon,
  ProfileIcon,
  UsersIcon,
  ProjectIcon,
} from "@/assets/icons";
import { Payment } from "@/types/general";
import { ColumnDef } from "@tanstack/react-table";
// import { elements } from "chart.js";

export const image1 =
  "https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0";
export const image2 =
  "https://th.bing.com/th/id/R.a2d4d66ef94dd85d56a082816b30f3e6?rik=KfrbgNT4gOOP3Q&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fapple-logo-transparent-png%2fapple-logo-transparent-png-10.png&ehk=sXHp47rdJ7jzwYOZuUZwbWhT8m3wcoEbbTof%2fX6I6LU%3d&risl=&pid=ImgRaw&r=0";
export const image3 =
  "https://th.bing.com/th/id/OIP.m1ar389tpEOAFN1NTurqvwAAAA?rs=1&pid=ImgDetMain";
export const image4 =
  "https://th.bing.com/th/id/R.c741810f9c33cf1dcc57c99d72e0a88f?rik=cpqlbe4biPOuAA&riu=http%3a%2f%2fwww.freelogovectors.net%2fwp-content%2fuploads%2f2018%2f03%2freal_madrid_cub_de_futbol-logo.png&ehk=0leBxEk7hblAGXb64NVnUz83tfO1n%2bVtT9C3rBadqUM%3d&risl=&pid=ImgRaw&r=0";

export const accountTypes = [
  { id: 1, label: "Home occupant", value: "HOME_OCCUPANT" },
  { id: 2, label: "Aggregator", value: "AGGREGATOR" },
  { id: 3, label: "Home Improvement Agency", value: "HIA" },
  { id: 4, label: "Financial Institution", value: "FINANCIAL_INSTITUTION" },
  { id: 5, label: "Insurance", value: "INSURANCE" },
];
export const aggregatorTypes = [
  { id: 1, label: "Local Authority", value: "LOCAL_AUTHORITY" },
  { id: 2, label: "Housing Association", value: "HOUSING_ASSOCIATION" },
  { id: 3, label: "Property Developer", value: "PROPERTY_DEVELOPER" },
  { id: 4, label: "Others", value: "FINANCIAL_INSTITUTION" },
];

export const retrofittingServices = [
  { label: "Heating/Cooling", value: "Heating/Cooling" },
  { label: "Insulation", value: "Insulation" },
  { label: "Lighting", value: "Lighting" },
  { label: "Flexible Dispatch", value: "Flexible Dispatch" },
  { label: "Others", value: "Others" },
];

export const homeOwnerSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/dashboard/applications",
  },
  {
    icon: DevicesIcon,
    title: "Devices",
    href: "/dashboard/devices",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/dashboard/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/dashboard/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/dashboard/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/dashboard/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/dashboard/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

export const aggregatorSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/aggregator",
  },
  {
    icon: ApplicationsIcon,
    title: "Database",
    href: "/aggregator/database",
  },
  {
    icon: DevicesIcon,
    title: "Projects",
    href: "/aggregator/projects",
  },
  {
    icon: DevicesIcon,
    title: "Devices",
    href: "/aggregator/devices",
  },
  {
    icon: DevicesIcon,
    title: "Staff",
    href: "/aggregator/staff",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/aggregator/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/aggregator/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/aggregator/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/aggregator/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/aggregator/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

export const imageExtension = {
  pdf: PDFIcon,
  png: PNGIcon,
  jpg: JPGIcon,
};

export const homeOccupantProfileTabs = [
  {
    name: "Bio Data",
    tabIndex: 1,
  },
  {
    name: "Address",
    tabIndex: 2,
  },
  {
    name: "Home Information",
    tabIndex: 3,
  },
  {
    name: "Documentation",
    tabIndex: 4,
  },
];

export const messageData = [
  {
    name: "Jeffery Moore",
    image: "image1.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image2.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#8AC926",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
  {
    name: "John Doe",
    image: "image3.jpg",
    industry: "JSK Financial services",
    message:
      "We will like you to confirm that the documents you sent are in line with b...",
    color: "#139EEC",
  },
];

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      barThickness: 20,
      grid: {
        display: false,
      },
    },

    y: {
      barThickness: 10,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

export const doughnutChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  radius: "90%",
};

export const placeholderHIAPackages = [
  {
    org_name: "Home Improvement Agency",
    location: "London, UK",
    rating: "4.1",
    subcontractors: "8",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    users: [image1, image3],
    logo: image1,
  },
  {
    org_name: "Home Improvement Agency",
    location: "London, UK",
    rating: "4.1",
    subcontractors: "8",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    users: [image1, image2],
    logo: image2,
  },
  {
    org_name: "Home Improvement Agency",
    location: "London, UK",
    rating: "4.1",
    subcontractors: "8",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",

    users: [image1, image2, image3],
    logo: image3,
  },
  {
    org_name: "Home Improvement Agency",
    location: "London, UK",
    rating: "4.1",
    subcontractors: "8",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    users: [image1, image2, image3],
    logo: image4,
  },
];

export const placeholderFinancialPackages = [
  {
    org_name: "Bank of Carbon Credit",
    location: "North East, UK",
    loan_amount: 32000,
    loan_duration: "3 years",
    interest_rate: 5,
    repayment_installment_options: {
      weekly: 1.5,
      monthly: 2.5,
      quarterly: 3.5,
    },
    logo: image1,
  },
];

export const pendingApplications = [
  {
    org_name: "Home Improvement Agency",
    location: "1st venue, London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    subcontractors: [image1, image2],
    logo: image1,
    status: "approved",
  },
  {
    org_name: "Home Improvement Agency",
    location: "1st venue, London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    subcontractors: [image1, image2],
    logo: image1,
    status: "approved/accepted",
  },
  {
    org_name: "Home Improvement Agency",
    location: "1st venue, London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    subcontractors: [image1, image2],
    logo: image1,
    status: "applied",
  },
  {
    org_name: "Home Improvement Agency",
    location: "1st venue, London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    subcontractors: [image1, image2],
    logo: image1,
    status: "under-review",
  },
];

export const subContractors = [
  {
    org_name: "Sub Contractor 1",
    location: "London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    logo: image1,
  },
  {
    org_name: "Sub Contractor 2",
    location: "London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    logo: image2,
  },
  {
    org_name: "Sub Contractor 3",
    location: "London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    logo: image3,
  },
  {
    org_name: "Sub Contractor 4",
    location: "London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    homes_retrofitted: "4.7k",
    logo: image4,
  },
];
export const insuranceOptions = [
  {
    org_name: "Carbon Credit Bank",
    package_name: "Insurance 1",
    location: "London, UK",
    rating: "4.1",
    created_at: "2022",
    repayment_date: "12 years",
    loan_amount: "£32K",
    logo: image1,
  },
  {
    org_name: "Carbon Credit Bank",
    package_name: "Insurance 1",
    location: "London, UK",
    rating: "4.1",
    created_at: "2022",
    repayment_date: "12 years",
    loan_amount: "£32K",
    logo: image3,
  },
  {
    org_name: "Carbon Credit Bank",
    package_name: "Insurance 1",
    location: "London, UK",
    rating: "4.1",
    created_at: "2022",
    repayment_date: "12 years",
    loan_amount: "£32K",
    logo: image2,
  },
  {
    org_name: "Carbon Credit Bank",
    package_name: "Insurance 1",
    location: "London, UK",
    rating: "4.1",
    services: ["Window Retrofitting"],
    created_at: "2022",
    repayment_date: "12 years",
    logo: image1,
  },
];

// HIA SIDE ITEMS
export const hiaSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/hia",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/hia/applications",
  },
  {
    icon: ApplicationsIcon,
    title: "Subcontractors",
    href: "/hia/subcontractors",
  },
  {
    icon: DevicesIcon,
    title: "Packages",
    href: "/hia/packages",
  },
  {
    icon: DevicesIcon,
    title: "Staff",
    href: "/hia/staff",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/hia/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/hia/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/hia/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/hia/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/hia/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];
// SUBCONTRACTOR SIDE ITEMS
export const subcontractorSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/subcontractor",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/subcontractor/applications",
  },
  {
    icon: ApplicationsIcon,
    title: "Subcontractors",
    href: "/subcontractor/subcontractors",
  },
  {
    icon: DevicesIcon,
    title: "Packages",
    href: "/subcontractor/packages",
  },
  {
    icon: DevicesIcon,
    title: "Staff",
    href: "/subcontractor/staff",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/subcontractor/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/subcontractor/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/subcontractor/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/subcontractor/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/subcontractor/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

//FINANCE SIDE ITEMS
export const financeSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/finance",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/finance/applications",
  },
  {
    icon: DevicesIcon,
    title: "Packages",
    href: "/finance/packages",
  },
  {
    icon: DevicesIcon,
    title: "Staff",
    href: "/finance/staff",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/finance/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/finance/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/finance/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/finance/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/finance/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

// INSURANCE SIDE ITEMS
export const insuranceSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/insurance",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/insurance/applications",
  },
  {
    icon: DevicesIcon,
    title: "Packages",
    href: "/insurance/packages",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/insurance/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/insurance/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/insurance/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/insurance/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/insurance/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

// ADMIN SIDE ITEMS
export const adminSideBarItems = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    href: "/admin",
  },
  {
    icon: UsersIcon,
    title: "Users Registration",
    href: "/admin/users-registration",
  },
  {
    icon: ApplicationsIcon,
    title: "Applications",
    href: "/admin/applications",
  },
  {
    icon: ProjectIcon,
    title: "Projects",
    href: "/admin/projects",
  },
  {
    icon: DevicesIcon,
    title: "Staff",
    href: "/admin/staff",
  },
  {
    icon: CarbonCreditIcon,
    title: "Carbon Credit Account",
    href: "/admin/carbon-credit",
  },
  {
    icon: InboxIcon,
    title: "Inbox",
    href: "/admin/inbox",
  },
  {
    icon: DocumentCentreIcon,
    title: "Document Centre",
    href: "/admin/document-centre",
  },
  {
    icon: ContactIcon,
    title: "Contact Us",
    href: "/admin/contact",
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/admin/profile",
  },
  {
    icon: LogoutIcon,
    title: "Logout",
    href: "/..",
  },
];

export const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      barThickness: 20,
      grid: {
        display: false,
      },
      border: {
        color: "rgba(230, 237, 255, 1)",
      },
    },

    y: {
      barThickness: 10,
      grid: {
        color: "rgba(230, 237, 255, 1)",
      },
      border: {
        color: "rgba(230, 237, 255, 1)",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const lineChartOptionss = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      barThickness: 20,
      grid: {
        display: false,
      },
      border: {
        color: "rgba(230, 237, 255, 1)",
      },
    },

    y: {
      barThickness: 10,
      grid: {
        color: "rgba(230, 237, 255, 1)",
        display: false,
      },
      border: {
        color: "rgba(230, 237, 255, 1)",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const yearLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const epcRatings = [
  { value: "A", label: "A (92-100)" },
  { value: "B", label: "B (81-91)" },
  { value: "C", label: "C (69-80)" },
  { value: "D", label: "D (55-68)" },
  { value: "E", label: "E (39-54)" },
  { value: "F", label: "F (21-38)" },
  { value: "G", label: "G (1-20)" },
];

export const idTypes = [
  { value: "Passport", label: "Passport" },
  { value: "Driver License", label: "Driver License" },
  { value: "Resident Permit", label: "Resident Permit" },
  { value: "Others", label: "Others" },
];

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

export const dummyHiaPackages = [
  {
    logo: image1,
    package_name: "Double rumble 4 one",
    services: [
      "Window retrofitting",
      "Door retrofitting",
      "Roof retrofitting",
      "Energy  retrofitting",
    ],
    locations: ["London", "Lagos", "Dublin", "Brentwood", "Manchester"],
  },
  {
    logo: image2,
    package_name: "Double rumble 4 one",
    services: [
      "Window retrofitting",
      "Door retrofitting",
      "Roof retrofitting",
      "Energy  retrofitting",
    ],
    locations: ["London", "Lagos", "Dublin", "Brentwood", "Manchester"],
  },
  {
    logo: image3,
    package_name: "Double rumble 4 one",
    services: [
      "Window retrofitting",
      "Door retrofitting",
      "Roof retrofitting",
      "Energy  retrofitting",
    ],
    locations: ["London", "Lagos", "Dublin", "Brentwood", "Manchester"],
  },
  {
    logo: image4,
    package_name: "Double rumble 4 one",
    services: [
      "Window retrofitting",
      "Door retrofitting",
      "Roof retrofitting",
      "Energy  retrofitting",
    ],
    locations: ["London", "Lagos", "Dublin", "Brentwood", "Manchester"],
  },
];
