'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

interface CalendarProps {
  selected?: Date | Date[];
  onSelect?: (date: Date | Date[] | undefined) => void;
  mode?: 'single' | 'range';
  disabled?: (date: Date) => boolean;
  className?: string;
  showOutsideDays?: boolean;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  fixedWeeks?: boolean;
}

const Calendar = ({
  selected,
  onSelect,
  mode = 'single',
  disabled,
  className,
  showOutsideDays = true,
  weekStartsOn,
  fixedWeeks,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const { days, firstDayOfCurrentMonth, lastDayOfCurrentMonth } =
    useMemo(() => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      const startDate = new Date(firstDay);
      const weekStart = weekStartsOn ?? 0;
      startDate.setDate(
        firstDay.getDate() - ((firstDay.getDay() - weekStart + 7) % 7)
      );

      const endDate = new Date(lastDay);
      const daysToAdd = fixedWeeks
        ? 6 - ((lastDay.getDay() - weekStart + 7) % 7)
        : 0;
      endDate.setDate(lastDay.getDate() + daysToAdd);

      const daysArray = [];
      while (startDate <= endDate) {
        daysArray.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
      }

      return {
        days: daysArray,
        firstDayOfCurrentMonth: firstDay,
        lastDayOfCurrentMonth: lastDay,
      };
    }, [currentMonth, weekStartsOn, fixedWeeks]);

  const isSelected = (date: Date) => {
    if (!selected) return false;
    if (Array.isArray(selected)) {
      return selected.some((d) => d.toDateString() === date.toDateString());
    }
    return selected.toDateString() === date.toDateString();
  };

  const isInRange = (date: Date) => {
    if (mode !== 'range' || !Array.isArray(selected) || selected.length < 2)
      return false;
    const [start, end] = selected;
    return date >= start && date <= end;
  };

  const handleDateClick = (date: Date) => {
    if (disabled?.(date)) return;

    const isDifferentMonth =
      date.getMonth() !== currentMonth.getMonth() ||
      date.getFullYear() !== currentMonth.getFullYear();
    if (isDifferentMonth) {
      setCurrentMonth(new Date(date.getFullYear(), date.getMonth()));
    }

    if (mode === 'range') {
      if (!Array.isArray(selected)) {
        onSelect?.([date]);
      } else if (selected.length === 2) {
        onSelect?.([date]);
      } else {
        const sorted = [selected[0], date].sort(
          (a, b) => a.getTime() - b.getTime()
        );
        onSelect?.(sorted);
      }
    } else {
      onSelect?.(isSelected(date) ? undefined : date);
    }
  };

  const monthName = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className={cn(
        'p-3 bg-background rounded-lg shadow-sm border w-full max-w-[368px] h-auto',
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-2 py-1 bg-[#F8F7F7] rounded-xl">
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() - 1
                )
              )
            }
            className="p-1 hover:bg-gray-100 rounded-md  bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="font-medium text-sm">{monthName}</div>
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1
                )
              )
            }
            className="p-1 hover:bg-gray-100 rounded-md  bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 sm:gap-5">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div
              key={`${day}-${index}`}
              className="text-muted-foreground text-[14px] flex items-center justify-center w-10 h-10"
            >
              {day}
            </div>
          ))}

          {days.map((date) => {
            const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
            const isPreviousMonth = date < firstDayOfCurrentMonth;
            const isNextMonth = date > lastDayOfCurrentMonth;
            const isDisabled = disabled?.(date);
            const selected = isSelected(date);
            const inRange = isInRange(date);
            const isToday = date.toDateString() === new Date().toDateString();

            return (
              <button
                key={date.toDateString()}
                onClick={() => handleDateClick(date)}
                className={cn(
                  'h-8 w-8 text-xs sm:h-10 sm:w-10 sm:text-sm rounded-md font-medium transition-colors',
                  'focus:outline-none ',
                  !isCurrentMonth && 'text-muted-foreground/40',
                  isPreviousMonth && 'text-muted-foreground/30',
                  isNextMonth && 'text-muted-foreground/50',
                  !showOutsideDays &&
                    !isCurrentMonth &&
                    'invisible pointer-events-none',
                  isDisabled && 'opacity-50 cursor-not-allowed',
                  selected &&
                    'bg-[#EE2A30] text-primary-foreground hover:bg-[#EE2A30]/90',
                  inRange && 'bg-[#EE2A30]/20',
                  isToday && !selected && 'border border-primary',
                  !selected &&
                    !isDisabled &&
                    !inRange &&
                    'hover:bg-accent hover:text-accent-foreground'
                )}
                disabled={isDisabled}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Calendar };
