import { Contact } from "@/components/contact/Contact"
import { Header } from "@/components/headers/header"
import { Hero } from "@/components/hero"
import { ProjectItem } from "@/components/projectItem"
import {
  accountingSoftware,
  taskManagementSoftware,
  wopApp,
} from "@/components/projectItem/Data"

export default function Home() {
  return (
    <>
      <Hero />
      <Header title="Meine Projekte" href="myProjects" />
      <main>
        <ProjectItem {...accountingSoftware} />
        <ProjectItem {...taskManagementSoftware} />
        <ProjectItem {...wopApp} />
      </main>
      <Header title="Kontakt" href="contact" />
      <main>
        <Contact />
      </main>
    </>
  )
}
