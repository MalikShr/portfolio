import { programmingLanguages, frameworksAndTechnologies } from "./Data"
import { TechnologyList } from "./technologyList.tsx"

export const TechnologyItems = () => {
  return (
    <main>
      <TechnologyList
        type={programmingLanguages}
        header="Programmiersprachen"
      />
      <TechnologyList
        type={frameworksAndTechnologies}
        header="Frameworks & Technologien"
      />
    </main>
  )
}
