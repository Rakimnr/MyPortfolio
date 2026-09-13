import { skills } from '../data/skills';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#F7F7FC] pt-4 pb-[80px] lg:pb-[100px] z-10">
      <div className="max-w-content mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-14">
          <div className="inline-block px-[9px] py-[5px] rounded-full bg-[#9333EA]/10 border border-[#9333EA]/20 mb-4">
            <span className="text-[11px] font-bold tracking-wider text-[#9333EA] uppercase">My Skills</span>
          </div>
          <h2 className="text-[28px] lg:text-[34px] font-heading font-bold text-[#16172B] mb-3">
            Technologies I Work With
          </h2>
          <div className="w-[45px] h-[3px] rounded-full bg-[#9333EA]"></div>
        </div>

        {/* Grid */}
        <div 
          className="grid gap-[14px] lg:gap-[18px] justify-center mx-auto"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 115px))' }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
