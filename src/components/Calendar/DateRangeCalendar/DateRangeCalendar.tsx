import React, { useEffect, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { CalendarProps, MonthsOfYear } from "../../types";
import { cn } from "../../../utils";
import { FindIconUrl } from "../../../utils/Constant";

const dayStyles = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "font-semibold",
    "cursor-pointer",
    "transition-colors",
    "duration-300",
  ],
  {
    variants: {
      selected: {
        true: "bg-[#334EAC] text-white",
        false: "text-[#26282B]",
      },
      isPastMonthDay: {
        true: "opacity-50 text-[#72787F] hover:bg-white hover:text-[#72787F]",
        false: "",
      },
    },
    defaultVariants: {
      selected: false,
      isPastMonthDay: false,
    },
  }
);

type CalendarDayProps = ComponentProps<"div"> & VariantProps<typeof dayStyles>;

const CalendarDay = forwardRef<HTMLDivElement, CalendarDayProps>(
  ({ selected, isPastMonthDay, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(dayStyles({ selected, isPastMonthDay }), className)}
      {...props}
    >
      {children}
    </div>
  )
);

export const DateRangeCalendar: React.FC<CalendarProps> = ({
  year,
  month,
  onDateRangeSelect,
}) => {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day);

    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (clickedDate > startDate) {
      setEndDate(clickedDate);
      if (onDateRangeSelect) {
        onDateRangeSelect(startDate, clickedDate);
      }
    } else {
      setStartDate(clickedDate);
      setEndDate(null);
    }
  };

  useEffect(() => {}, [startDate]);

  const renderDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <CalendarDay key={`empty-${i}`} className="calendar-day-placeholder" />
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isPastMonthDay = false;
      const isSelected =
        isDateInRange(i) ||
        (startDate &&
          startDate.getDate() === i &&
          startDate.getMonth() === currentMonth &&
          startDate.getFullYear() === currentYear &&
          !endDate);

      days.push(
        <CalendarDay
          key={i}
          selected={isSelected}
          isPastMonthDay={isPastMonthDay}
          className={cn("font-normal", {
            "bg-[#334EAC] text-white": isSelected,
          })}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </CalendarDay>
      );
    }

    return days;
  };

  const isDateInRange = (day: number) => {
    if (!startDate || !endDate) return false;
    const clickedDate = new Date(currentYear, currentMonth, day);
    return clickedDate >= startDate && clickedDate <= endDate;
  };

  return (
    <div className="shadow-md p-4">
      <div className="flex justify-between mb-4">
        <button onClick={handlePrevMonth}>
          <img src={FindIconUrl("KeyboardArrowLeft.svg")} />
        </button>
        <div className="calendar-header text-center text-[#26282B] font-semibold mb-2">
          {MonthsOfYear[currentMonth - 1]} {currentYear}
        </div>
        <button onClick={handleNextMonth}>
          <img src={FindIconUrl("KeyboardArrowRight.svg")} />
        </button>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-6">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div
            key={index}
            className="calendar-day-header text-center text-[#72787F] font-normal"
          >
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

