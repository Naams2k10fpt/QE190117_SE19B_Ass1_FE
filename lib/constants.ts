export interface StatusOption {
  value: number;
  label: string;
  badgeClass: string;
  bgClass: string;
  textClass: string;
}

export const PROJECT_STATUSES: Record<number, StatusOption> = {
  0: {
    value: 0,
    label: "Not Started",
    badgeClass: "bg-slate-100 text-slate-700 border-slate-300",
    bgClass: "bg-slate-100",
    textClass: "text-slate-700",
  },
  1: {
    value: 1,
    label: "In Progress",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    bgClass: "bg-blue-100",
    textClass: "text-blue-800",
  },
  2: {
    value: 2,
    label: "Completed",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    bgClass: "bg-emerald-100",
    textClass: "text-emerald-800",
  },
  3: {
    value: 3,
    label: "On Hold",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
    bgClass: "bg-amber-100",
    textClass: "text-amber-800",
  },
};

export const TASK_STATUSES: Record<number, StatusOption> = {
  0: {
    value: 0,
    label: "To Do",
    badgeClass: "bg-gray-100 text-gray-800 border-gray-300",
    bgClass: "bg-gray-100",
    textClass: "text-gray-800",
  },
  1: {
    value: 1,
    label: "In Progress",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    bgClass: "bg-blue-100",
    textClass: "text-blue-800",
  },
  2: {
    value: 2,
    label: "Done",
    badgeClass: "bg-green-100 text-green-800 border-green-300",
    bgClass: "bg-green-100",
    textClass: "text-green-800",
  },
  3: {
    value: 3,
    label: "Cancelled",
    badgeClass: "bg-red-100 text-red-800 border-red-300",
    bgClass: "bg-red-100",
    textClass: "text-red-800",
  },
};

export const TASK_PRIORITIES: Record<number, StatusOption> = {
  0: {
    value: 0,
    label: "Low",
    badgeClass: "bg-sky-50 text-sky-700 border-sky-200",
    bgClass: "bg-sky-50",
    textClass: "text-sky-700",
  },
  1: {
    value: 1,
    label: "Medium",
    badgeClass: "bg-yellow-100 text-yellow-800 border-yellow-300",
    bgClass: "bg-yellow-100",
    textClass: "text-yellow-800",
  },
  2: {
    value: 2,
    label: "High",
    badgeClass: "bg-orange-100 text-orange-800 border-orange-300",
    bgClass: "bg-orange-100",
    textClass: "text-orange-800",
  },
  3: {
    value: 3,
    label: "Critical",
    badgeClass: "bg-rose-100 text-rose-800 border-rose-300",
    bgClass: "bg-rose-100",
    textClass: "text-rose-800",
  },
};
