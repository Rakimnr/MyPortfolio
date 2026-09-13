import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiMysql, SiKotlin, SiPhp, SiDart, SiFlutter, 
  SiGit, SiGithub, SiPostman, SiAndroidstudio 
} from 'react-icons/si';
import { FaJava, FaMasksTheater } from 'react-icons/fa6';

const iconMap = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  java: FaJava,
  kotlin: SiKotlin,
  php: SiPhp,
  dart: SiDart,
  flutter: SiFlutter,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  playwright: FaMasksTheater,
  androidstudio: SiAndroidstudio
};

export default function SkillCard({ skill, index }) {
  const IconComponent = iconMap[skill.iconKey] || SiReact;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
      className="flex flex-col items-center justify-center w-full min-h-[100px] lg:min-h-[105px] p-[12px] lg:p-[14px] bg-white border border-[#ECECF4] rounded-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-250 hover:-translate-y-[5px] hover:border-[#9333EA]/30 hover:shadow-[0_8px_25px_rgba(147,51,234,0.1)] group"
    >
      <div className={`w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] flex items-center justify-center rounded-[12px] lg:rounded-[14px] ${skill.bg} ${skill.color} mb-[8px] lg:mb-[10px]`}>
        <IconComponent size={26} className="transition-transform duration-250 group-hover:scale-[1.08]" />
      </div>
      <span className="text-[12px] lg:text-[13px] font-semibold text-[#222437] text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}
