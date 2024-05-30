import { useState, useEffect } from 'react';
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { CalendarProps, Month } from "../type";
import { Left, Right } from '../Image/icon';

const dayStyles = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "font-semibold",
    "cursor-pointer",
    "hover:bg-gray-200",
    "transition-colors",
    "duration-300",
  ],
  {
    variants: {
      selected: {
        true: "bg-blue-500 text-white",
        false: "bg-white text-gray-800",
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

type CalendarDayProps = ComponentProps<"div"> & VariantProps<typeof dayStyles>;

const CalendarDay = forwardRef<HTMLDivElement, CalendarDayProps>(
  ({ selected, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(dayStyles({ selected }), className)}
      {...props}
    >
      {children}
    </div>
  )
);

type DayViewProps = {
  selectedDate: Date;
  onBack: () => void;
  onPrevDay: () => void;
  onNextDay: () => void;
  selectedView: 'day' | 'week' | 'month';
  handleViewChange: (view: 'day' | 'week' | 'month') => void;
};

const DayView: React.FC<DayViewProps> = ({
  selectedDate,
  onBack,
  onPrevDay,
  onNextDay,
  selectedView,
  handleViewChange,
}) => {
  const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="day-view w-[825px] p-4 border rounded-lg shadow-md">
      <div className="flex justify-between mb-4 items-center">
        <button className='p-1 border-2 hover:bg-gray-200' onClick={onBack}><Left /></button>
        <div className="day-view-header text-left text-[#26282B] font-semibold flex-1 pl-4">
          {formattedDate}
        </div>
        <div className='flex items-center gap-4'>
          <div className="space-x-3">
            <button onClick={onPrevDay}><Left /></button>
            <button onClick={onNextDay}><Right /></button>
          </div>
          <div className="border-2 min-w-[190px] rounded-[50px] flex justify-between">
            <button
              className={`p-2 ${selectedView === 'day' ? 'bg-[#D0E3FF] text-[#334EAC] rounded-[50px]' : 'text-[#72787F]'}`}
              onClick={() => handleViewChange('day')}
            >
              Day
            </button>
            <button
              className={`p-2 ${selectedView === 'week' ? 'bg-[#D0E3FF] text-[#334EAC] rounded-[50px]' : 'text-[#72787F]'}`}
              onClick={() => handleViewChange('week')}
            >
              Week
            </button>
            <button
              className={`p-2 ${selectedView === 'month' ? 'bg-[#D0E3FF] text-[#334EAC] rounded-[50px]' : 'text-[#72787F]'}`}
              onClick={() => handleViewChange('month')}
            >
              Month
            </button>
          </div>
        </div>
      </div>
      <div className="day-view-grid">
        {hours.map((hour, index) => (
          <div key={index} className="flex items-center mb-2 relative">
            <div className="w-16 text-right mr-4 text-gray-500">{hour}</div>
            <div className="flex-1 border-t"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Calendar: React.FC<CalendarProps> = ({ year, month, selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);
  const [view, setView] = useState<'month' | 'day'>('month');
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedView, setSelectedView] = useState<'day' | 'week' | 'month'>('day');

  useEffect(() => {
    setCurrentYear(year);
    setCurrentMonth(month);
  }, [year, month]);

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

  const handlePrevDay = () => {
    if (selectedDay) {
      const prevDay = new Date(selectedDay);
      prevDay.setDate(selectedDay.getDate() - 1);
      setSelectedDay(prevDay);
      if (onDateSelect) {
        onDateSelect(prevDay);
      }
    }
  };

  const handleNextDay = () => {
    if (selectedDay) {
      const nextDay = new Date(selectedDay);
      nextDay.setDate(selectedDay.getDate() + 1);
      setSelectedDay(nextDay);
      if (onDateSelect) {
        onDateSelect(nextDay);
      }
    }
  };

  const handleViewChange = (view: 'day' | 'week' | 'month') => {
    setSelectedView(view);
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDay(date);
    setView('day');
    setSelectedView('day');
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  function isSameDay(date1: Date, date2: Date): boolean {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      return false;
    }
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  const renderDays = () => {
    const days = [];
    const prevMonthDaysCount = new Date(currentYear, currentMonth, 0).getDate();
    const totalDays = firstDayOfMonth + daysInMonth;
    const prevMonthStartDay = prevMonthDaysCount - firstDayOfMonth + 1;

    for (let i = 0; i < totalDays; i++) {
      const day = i - firstDayOfMonth + 1;
      let currentDay;
      let displayDay: number;
      let isPastMonthDay = false;

      if (day <= 0) {
        currentDay = new Date(currentYear, currentMonth - 1, prevMonthStartDay + i);
        displayDay = prevMonthStartDay + i;
        isPastMonthDay = true;
      } else if (day > daysInMonth) {
        currentDay = new Date(currentYear, currentMonth + 1, day - daysInMonth);
        displayDay = day - daysInMonth;
      } else {
        currentDay = new Date(currentYear, currentMonth, day);
        displayDay = day;
      }

      const isToday = isSameDay(currentDay, new Date());
      const isSelected = selectedDate && isSameDay(currentDay, selectedDate);

      days.push(
        <CalendarDay
          key={i}
          className={cn("calendar-day font-normal", {
            "opacity-30": isPastMonthDay,
            today: isToday,
            selected: isSelected,
          })}
          onClick={() => handleDateClick(displayDay)}
        >
          {displayDay}
        </CalendarDay>
      );
    }

    if (days.length < 42) {
      const remainingDays = 42 - days.length;
      for (let i = 1; i <= remainingDays; i++) {
        const displayDay = i;
        days.push(
          <CalendarDay
            key={i + totalDays}
            className={cn("calendar-day opacity-30 font-normal")}
            onClick={() => handleDateClick(displayDay)}
          >
            {displayDay}
          </CalendarDay>
        );
      }
    }

    return days;
  };

  return (
    <div>
      {view === 'month' ? (
        <>
          <div className="flex justify-between mb-4">
            <button onClick={handlePrevMonth}><Left /></button>
            <div className="calendar-header text-center text-[#26282B] font-semibold mb-2">
              {Month[currentMonth]} {currentYear}
            </div>
            <button onClick={handleNextMonth}><Right /></button>
          </div>
          <div className="calendar-grid grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
              <div key={index} className="calendar-day-header text-center opacity-50 text-[#72787F] font-normal">
                {day}
              </div>
            ))}
            {renderDays()}
          </div>
        </>
      ) : (
        <DayView
          selectedDate={selectedDay!}
          onBack={() => setView('month')}
          onPrevDay={handlePrevDay}
          onNextDay={handleNextDay}
          selectedView={selectedView}
          handleViewChange={handleViewChange}
        />
      )}
    </div>
  );
};

export default Calendar;
