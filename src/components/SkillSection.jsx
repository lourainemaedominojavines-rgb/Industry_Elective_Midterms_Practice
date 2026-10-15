import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

export default function SkillSection () {
    return (
        <>
        <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
          
          <SectionHeading title ="Skills" subtitle = "What I work with"></SectionHeading>
          
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-stone-500">Languages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <SkillTag name = "HTML"></SkillTag>
                <SkillTag name = "CSS"></SkillTag>
                <SkillTag name = "JavaScript"></SkillTag>
                <SkillTag name = "Java"></SkillTag>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-stone-500">Frameworks</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <SkillTag name = "React"></SkillTag>
                <SkillTag name = "Tailwind CSS"></SkillTag>
                <SkillTag name = "Bootstrap"></SkillTag>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-stone-500">Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <SkillTag name = "Git"></SkillTag>
                <SkillTag name = "VSCode"></SkillTag>
                <SkillTag name = "MySQL"></SkillTag>
                <SkillTag name = "Figma"></SkillTag>
              </div>
            </div>
          </div>
          
        </section>
        </>
    );
}