import { motion } from 'framer-motion';

export default function StatCard({ value, label, icon: Icon, bgClass, textClass, iconColorClass }) {
  return (
    <motion.div 
      className={`relative flex flex-col justify-center h-[125px] lg:h-[135px] p-[20px] rounded-[20px] ${bgClass} border border-white/40 shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]`}
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className={`text-[28px] lg:text-[34px] font-heading font-extrabold ${textClass} leading-none`}>
          {value}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/50 ${iconColorClass}`}>
          <Icon size={20} />
        </div>
      </div>
      <span className="text-[13px] font-medium text-brand-muted/90 mt-1">
        {label}
      </span>
    </motion.div>
  );
}
