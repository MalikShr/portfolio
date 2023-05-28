export interface Project {
  title: string
  description: string
  logoSrc: string
  projectLink: string
  codeLink: string
}

export const accountingSoftware: Project = {
  title: "Buchführungssoftware",
  description: `Das Programm ermöglicht die Erstellung und automatische Speicherung von Buchungssätzen. Dadurch entsteht eine dynamische Gewinn- und Verlustrechnung sowie eine Bilanz. Die Daten dienen zur Berechnung von Kennzahlen, die eingesehen werden können. Eine Kontenübersicht zeigt die Salden und ermöglicht das Hinzufügen von Beständen. Für die Nutzung muss ein neues Projekt erstellt werden. Die Daten werden automatisch im Projektverzeichnis gespeichert und sind beim nächsten Start verfügbar. Durch den Export als .pdf erhält man eine Übersicht aller Buchungssätze, Konten, Bilanzen, GuV und Kennzahlen zum Ausdrucken. Zudem können die Buchungssätze eingesehen, sortiert und gefiltert werden.`,
  logoSrc: "/logos/accountingLogo.svg",
  projectLink:
    "https://github.com/MalikShr/accounting-software/releases/tag/v1.0.0",
  codeLink: "https://github.com/MalikShr/accounting-software",
}

export const taskManagementSoftware: Project = {
  title: "Aufgabenmanagementsoftware",
  description: `In dieser Webanwendung besteht die Möglichkeit, Aufgaben zu erstellen, welche anschließend in einer Datenbank gespeichert werden. Mithilfe eines Kanban Boards können den Aufgaben ein bestimmter Status zugeordnet werden und es besteht die Option, Kommentare für eventuelle Rückfragen hinzuzufügen. Im Bereich "Benachrichtigung" erhält der Nutzer automatische Benachrichtigungen, sobald Kommentare zu erstellten Aufgaben eingehen. Um die Software nutzen zu können, ist eine Registrierung mit den persönlichen Daten erforderlich. Diese können im Nachhinein nach Belieben im Abschnitt "Profil" angepasst werden. Im "Mitglieder"-Bereich können die Kontaktdaten aller Kollegen eingesehen werden, falls dringende Fragen zu einer Aufgabe auftreten. Zudem besteht die Möglichkeit, erstellte Aufgaben zu löschen und zu bearbeiten. Mit Administratorrechten kann der Administrator Benutzer entfernen oder beliebige Aufgaben löschen. Bei erneutem Öffnen der Anwendung bleibt der Nutzer dank der in den Cookies gespeicherten Daten angemeldet.`,
  logoSrc: "/logos/taskLogo.svg",
  projectLink: "https://task-management-software.vercel.app/",
  codeLink: "https://github.com/MalikShr/task-management-software",
}

export const wopApp: Project = {
  title: "Wahrheit oder Pflicht App ",
  description: `Diese Handy-App ermöglicht es, das Spiel "Wahrheit oder Pflicht" zu spielen. Um das Spiel zu starten, müssen mindestens zwei Spieler eingetragen werden. Dabei wird das Geschlecht jedes Spielers festgelegt und ein entsprechender Benutzername ausgewählt. Das Geschlecht beeinflusst die Auswahl der Aufgaben im weiteren Verlauf des Spiels. Es gibt allgemeine Aufgaben sowie geschlechtsspezifische Aufgaben, die sowohl Personen des eigenen als auch des anderen Geschlechts einbeziehen können. Eine mögliche Kombination wäre beispielsweise "Mann-Mann", "Frau-Mann", usw. Wenn eine Aufgabe aus bestimmten Gründen nicht erfüllt wird, erhält der betreffende Spieler eine Strafe. Zur Abwechslung gibt es gelegentlich zu Beginn einer neuen Runde eine Aufgabe, an der alle Mitspieler teilnehmen. Ein Beispiel hierfür wäre die Aufforderung, "Nenne Länder, die mit dem Buchstaben 'A' beginnen!". Die App wurde mithilfe von React Native entwickelt, um dem Benutzer ein authentisches Nutzungserlebnis zu bieten. Besonderes Augenmerk wurde auf ein schlichtes, dennoch ansprechendes Design gelegt.`,
  logoSrc: "/logos/wopLogo.svg",
  projectLink: "https://github.com/MalikShr/thruth-or-dare/releases/tag/v1.0.0",
  codeLink: "https://github.com/MalikShr/thruth-or-dare",
}
