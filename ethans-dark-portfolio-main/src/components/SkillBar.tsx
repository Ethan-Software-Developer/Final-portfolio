interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar = ({ skill, percentage }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-white/80">{skill}</span>
        <span className="text-sm text-white/60">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;