import { motion } from 'motion/react';
import { memo } from 'react';
import { filters, type FilterType } from './portfolioData';

interface PortfolioFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const PortfolioFilters = memo(function PortfolioFilters({ activeFilter, onFilterChange }: PortfolioFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-2.5 rounded-lg transition-all ${
            activeFilter === filter.value
              ? 'bg-linear-to-r from-indigo-600 to-violet-600 text-white'
              : 'bg-slate-900/30 border border-slate-800/50 text-slate-400 hover:text-white'
          }`}
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
});