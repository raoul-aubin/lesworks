# LesWorks – Job Listing (Angular)

## Beschreibung

- Diese Angular-Anwendung zeigt eine Liste von Stellenangeboten an.
- Für jedes Stellenangebot kann eine Detailansicht aufgerufen werden.
- Die Anwendung verwendet Standalone Components, einen Service zur Datenverwaltung und den Angular Router.

## Komponenten

### JobListComponent
- Anzeige aller Jobangebote in Kartenform
- Laden der Daten über `JobService`
- Navigation zur Detailansicht eines Jobs

### JobDetailComponent
- Anzeige der Detailinformationen eines ausgewählten Jobs
- Lesen der Job-ID aus der URL mit `ActivatedRoute`
- Laden des Jobs über `JobService`


## Datenmodell
- Vereinfachtes Job-Modell:

id
title
company
location
description
salary?
jobtyp[]
Arbeitszeit[]
veroeffentlicht

## Technologien
- Angular (Standalone Components)

- TypeScript

- Angular Router

- Bootstrap

- HTML / SCSS

## Installation und Start
```
npm install
ng serve
```
## Hinweise
- Aktuell werden statische Jobdaten verwendet

- Keine Backend-Anbindung vorhanden

- Erweiterbar für REST-APIs (z. B. Spring Boot)
