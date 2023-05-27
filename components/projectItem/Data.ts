export interface Project {
  title: string
  description: string
  logoSrc: string
  href: string
}

export const accountingSoftware: Project = {
  title: "Buchführungssoftware",
  description:
    "In dem Programm können Buchungssätze erstellt werden, diese werden automatisch gespeichert und es wird dynamisch eine Gewinn- und Verlustrechnung, sowie eine Bilanz erstellt. Anhand der Daten werden Kennzahlen errechnet, die eingesehen werden können. Außerdem ist es möglich die Salden der Konten in einer Kontenübersicht einzusehen und Bestände zu den einzelnen Konten hinzuzufügen. Um das Programm zu nutzen, muss ein neues Projekt erstellt werden. Die Daten werden dann automatisch in dem Verzeichnis, in dem man das Projekt erstellt hat, gespeichert. So kann man diese beim nächsten Programmstart problemlos wieder aufrufen. Wenn man das Projekt als .pdf exportiert wird, bekommt man eine Übersicht von allen Buchungssätzen, Konten, der Bilanz, der Guv und den dazugehörigen Kennzahlen, die man ausdrucken kann. Es ist außerdem möglich die Buchungssätze einzusehen, zu sortieren und zu filtern.",
  logoSrc: "/logos/accountingLogo.svg",
  href: "https://github.com/MalikShr/accounting-software/releases/tag/v1.0.0",
}

export const taskManagementSoftware: Project = {
  title: "Aufgabenmanagementsoftware",
  description:
    "In dieser Webanwendung ist es möglich Aufgaben zu erstellen, diese werden in einer Datenbank gespeichert. Durch ein Kanban Board kann den Aufgaben ein bestimmter Status zugeschrieben werden. Außerdem können diese bei Rückfragen kommentiert werden. In dem Reiter „Benachrichtigung“, wird der Nutzer automatisch benachrichtigt, sobald jemand seine Aufgabe kommentiert. Um die Software zu nutzen, muss der Nutzer sich mit seinen Daten registrieren. Diese kann er im Nachhinein auf dem Reiter „Profil“ beliebig ändern. Falls dringende Fragen zu einer Aufgabe bestehen sollten, ist es auf dem Reiter „Mitglieder“ möglich, die Kontaktdaten aller Kollegen einzusehen. Außerdem können gestellte Aufgaben gelöscht und bearbeitet werden. Mit Adminrechten ist es möglich Benutzer zu löschen oder beliebige Aufgaben zu löschen. Wenn die Anwendung ein weiteres mal geöffnet wird, bleibt der Nutzer mit seinen Daten angemeldet, weil diese in den Cookies gespeichert werden.",
  logoSrc: "/logos/taskLogo.svg",
  href: "https://task-management-software.vercel.app/",
}

export const wopApp: Project = {
  title: "Wahrheit oder Pflicht App ",
  description:
    "In dieser Handy App ist es möglich unter Freunden Wahrheit oder Pflicht zu spielen. Um spielen zu können, müssen mindestens zwei Spieler für das Spiel eingetragen sein, dabei muss das Geschlecht des Spielers, sowie ein Nutzername ausgewählt werden. Durch das Geschlecht werden im späteren Verlauf des Spiels die Aufgaben ausgewählt. Es gibt allgemeine Aufgaben aber auch geschlechtsspezifische Aufgaben und Aufgaben die eine Person des anderen Geschlechts oder des eigenen Geschlechts inkludieren. Ein Beispiel hierfür wäre die Kombination Junge-Junge, Mädchen-Junge etc. Wenn eine Aufgabe aus bestimmten Gründen nicht erfüllt wird, bekommt der Spieler eine Strafe. Für die Abwechslung gibt es manchmal zum neuen Rundenbeginn eine Aufgabe, in die alle Mitspieler inkludiert werden. Ein Beispiel hierfür wäre „Zählt Länder auf, die mit dem Buchstaben „A“ beginnen“. Die App wurde mit React Native erstellt und garantiert so ein natives Erlebnis für den Benutzer. Das Hauptaugenmerkt der App, ist das schlichte aber trotzdem nicht langweilige Design. In dieser Handy App ist es möglich unter Freunden Wahrheit oder Pflicht zu spielen. Um spielen zu können, müssen mindestens zwei Spieler für das Spiel eingetragen sein, dabei muss das Geschlecht des Spielers, sowie ein Nutzername ausgewählt werden. Durch das Geschlecht werden im späteren Verlauf des Spiels die Aufgaben ausgewählt. Es gibt allgemeine Aufgaben aber auch geschlechtsspezifische Aufgaben und Aufgaben die eine Person des anderen Geschlechts oder des eigenen Geschlechts inkludieren. Ein Beispiel hierfür wäre die Kombination Junge-Junge, Mädchen-Junge etc. Wenn eine Aufgabe aus bestimmten Gründen nicht erfüllt wird, bekommt der Spieler eine Strafe. Für die Abwechslung gibt es manchmal zum neuen Rundenbeginn eine Aufgabe, in die alle Mitspieler inkludiert werden. Ein Beispiel hierfür wäre „Zählt Länder auf, die mit dem Buchstaben „A“ beginnen“. Die App wurde mit React Native erstellt und garantiert so ein natives Erlebnis für den Benutzer. Das Hauptaugenmerkt der App, ist das schlichte aber trotzdem nicht langweilige Design. ",
  logoSrc: "/logos/wopLogo.svg",
  href: "https://github.com/MalikShr/thruth-or-dare/releases/tag/v1.0.0",
}
