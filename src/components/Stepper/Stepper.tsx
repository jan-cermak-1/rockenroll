import React from 'react';
import './Stepper.css';

export interface Step {
  id: string;
  label: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  orientation = 'horizontal',
  className = '',
}) => {
  const classNames = [
    'soul-stepper',
    `soul-stepper--${orientation}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <div
            key={step.id}
            className={`soul-stepper__step ${isActive ? 'soul-stepper__step--active' : ''} ${
              isCompleted ? 'soul-stepper__step--completed' : ''
            }`}
          >
            <div className="soul-stepper__indicator">
              <div className="soul-stepper__circle">
                {isCompleted ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && <div className="soul-stepper__connector" />}
            </div>
            <div className="soul-stepper__content">
              <div className="soul-stepper__label">{step.label}</div>
              {step.description && <div className="soul-stepper__description">{step.description}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

