import React from 'react';
import './Slider.css';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  showValue?: boolean;
  marks?: Array<{ value: number; label: string }>;
  className?: string;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      label,
      min = 0,
      max = 100,
      step = 1,
      value = 0,
      onChange,
      showValue = true,
      marks,
      className = '',
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(Number(e.target.value));
      }
    };

    const percentage = ((value - min) / (max - min)) * 100;

    const classNames = ['soul-slider', className].filter(Boolean).join(' ');

    return (
      <div className={classNames}>
        {label && (
          <div className="soul-slider__header">
            <label className="soul-slider__label">{label}</label>
            {showValue && <span className="soul-slider__value">{value}</span>}
          </div>
        )}
        <div className="soul-slider__track-wrapper">
          <input
            ref={ref}
            type="range"
            className="soul-slider__input"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            style={{
              background: `linear-gradient(to right, #0066ff 0%, #0066ff ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)`,
            }}
            {...props}
          />
          {marks && (
            <div className="soul-slider__marks">
              {marks.map((mark) => {
                const markPercentage = ((mark.value - min) / (max - min)) * 100;
                return (
                  <div
                    key={mark.value}
                    className="soul-slider__mark"
                    style={{ left: `${markPercentage}%` }}
                  >
                    <div className="soul-slider__mark-indicator" />
                    <div className="soul-slider__mark-label">{mark.label}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

