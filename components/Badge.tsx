import React from "react";
import {
  PROJECT_STATUSES,
  TASK_STATUSES,
  TASK_PRIORITIES,
} from "@/lib/constants";
import { TaskTagDto } from "@/lib/types";

export const ProjectStatusBadge: React.FC<{ status: number; className?: string }> = ({
  status,
  className = "",
}) => {
  const info = PROJECT_STATUSES[status] || {
    label: `Status ${status}`,
    badgeClass: "bg-gray-100 text-gray-800 border-gray-300",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${info.badgeClass} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-80" />
      {info.label}
    </span>
  );
};

export const TaskStatusBadge: React.FC<{ status: number; className?: string }> = ({
  status,
  className = "",
}) => {
  const info = TASK_STATUSES[status] || {
    label: `Status ${status}`,
    badgeClass: "bg-gray-100 text-gray-800 border-gray-300",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${info.badgeClass} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-80" />
      {info.label}
    </span>
  );
};

export const TaskPriorityBadge: React.FC<{
  priority: number;
  className?: string;
}> = ({ priority, className = "" }) => {
  const info = TASK_PRIORITIES[priority] || {
    label: `Priority ${priority}`,
    badgeClass: "bg-gray-100 text-gray-800 border-gray-300",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${info.badgeClass} ${className}`}
    >
      {info.label}
    </span>
  );
};

export const TagPill: React.FC<{
  tag: { tagId?: number; tagName: string; color?: string | null };
  onRemove?: () => void;
  className?: string;
}> = ({ tag, onRemove, className = "" }) => {
  const color = tag.color && /^#[0-9A-Fa-f]{6}$/.test(tag.color) ? tag.color : "#64748b";

  return (
    <span
      style={{
        backgroundColor: `${color}15`,
        borderColor: `${color}40`,
        color: color,
      }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium border ${className}`}
    >
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span>{tag.tagName}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:opacity-75 ml-0.5 p-0.5"
          aria-label={`Remove tag ${tag.tagName}`}
        >
          ×
        </button>
      )}
    </span>
  );
};
