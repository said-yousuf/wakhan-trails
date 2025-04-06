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
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday
  fixedWeeks?: boolean;
}

const Calendar = ({
  selected,
  onSelect,
  mode = 'single',
  disabled,
  className,
  weekStartsOn,
  fixedWeeks,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = useMemo(() => {
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
    return daysArray;
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
      className={cn('p-3 bg-background rounded-lg shadow-sm border', className)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() - 1
                )
              )
            }
            className="p-1 hover:bg-accent rounded-md"
          >
            <ChevronLeft className="h-5 w-5" />
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
            className="p-1 hover:bg-accent rounded-md"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="text-muted-foreground text-xs h-8 flex items-center justify-center"
            >
              {day}
            </div>
          ))}

          {days.map((date) => {
            const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
            const isDisabled = disabled?.(date);
            const selected = isSelected(date);
            const inRange = isInRange(date);
            const isToday = date.toDateString() === new Date().toDateString();

            return (
              <button
                key={date.toDateString()}
                onClick={() => handleDateClick(date)}
                onMouseEnter={() => mode === 'range'}
                className={cn(
                  'h-8 rounded-md text-sm transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-ring',
                  !isCurrentMonth && 'text-muted-foreground/40',
                  isDisabled && 'opacity-50 cursor-not-allowed',
                  selected &&
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                  inRange && 'bg-primary/20',
                  isToday && 'border border-primary',
                  !selected &&
                    !isDisabled &&
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
