import React from 'react';
import './Pagination.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = '',
}) => {
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
  };

  const paginationRange = () => {
    const totalNumbers = siblingCount + 5;

    if (totalNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 3 + 2 * siblingCount);
      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - (2 + 2 * siblingCount), totalPages);
      return [1, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, '...', ...middleRange, '...', totalPages];
    }

    return range(1, totalPages);
  };

  const pages = paginationRange();

  const classNames = ['soul-pagination', className].filter(Boolean).join(' ');

  return (
    <nav className={classNames} aria-label="Pagination">
      <button
        type="button"
        className="soul-pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {pages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`dots-${index}`} className="soul-pagination__dots">
              …
            </span>
          );
        }

        return (
          <button
            key={page}
            type="button"
            className={`soul-pagination__button ${
              currentPage === page ? 'soul-pagination__button--active' : ''
            }`}
            onClick={() => onPageChange(page as number)}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        className="soul-pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
};

