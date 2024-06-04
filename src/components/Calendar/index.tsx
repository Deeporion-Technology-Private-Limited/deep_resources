import { useState, useEffect } from 'react';
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { CalendarProps, MonthsOfYear } from "../Button/type";
import { Left, Right } from '../Button/ButtonImage/icon';

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
        true: "bg-blue-500 text-white",
        false: "text-[#26282B] hover:bg-[#334EAC] hover:text-white",
      },
      isPastMonthDay: {
        true: "opacity-50 text-[#72787F] hover:bg-white hover:text-[#72787F]",
        false: "",
      }
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
    <div className="day-view w-[825px] p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-4 items-center">
        <button className='hover:bg-gray-200' onClick={onBack}><Left /></button>
        <div className="day-view-header text-left text-[#26282B] font-semibold flex-1 pl-4">
          {formattedDate}
        </div>
        <div className='flex items-center gap-4'>
          <div className="space-x-3">
            <button onClick={onPrevDay}><Left /></button>
            <button onClick={onNextDay}><Right /></button>
          </div>
          <div className="border min-w-[190px] rounded-[50px] flex justify-between">
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
            <div className="pl-8 text-right mr-4 text-gray-500">{hour}</div>
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
    setCurrentMonth(month - 1);
    if (selectedDate) {
      setSelectedDay(selectedDate);
    }
  }, [year, month, selectedDate]);

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
    const currentDate = new Date();
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
        isPastMonthDay = true;
      } else {
        currentDay = new Date(currentYear, currentMonth, day);
        displayDay = day;
      }
  
      const isToday = isSameDay(currentDay, currentDate);
      const isSelected = selectedDate && isSameDay(currentDay, selectedDate);
  
      days.push(
        <CalendarDay
          key={i}
          selected={isSelected}
          isPastMonthDay={isPastMonthDay}
          className={cn("font-normal", {
            today: isToday,
            'bg-[#334EAC] text-white': isToday
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
            isPastMonthDay
            className={cn("font-normal")}
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
        <div className='shadow-md p-4'>

          <div className="flex justify-between mb-4">
            <button onClick={handlePrevMonth}><Left /></button>
            <div className="calendar-header text-center text-[#26282B] font-semibold mb-2">
              {MonthsOfYear[currentMonth]} {currentYear}
            </div>
            <button onClick={handleNextMonth}><Right /></button>
          </div>
          <div className="calendar-grid grid grid-cols-7 gap-6">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
              <div key={index} className="calendar-day-header text-center text-[#72787F] font-normal">
                {day}
              </div>
            ))}
            {renderDays()}
          </div>
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
