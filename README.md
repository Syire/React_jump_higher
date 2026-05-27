# Tony Jump

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
</p>

<p align="center">
  Arcade jumping game con Tony Pitony, realizzato in React e Vite, con leaderboard online, musica e supporto mobile.
</p>

<p align="center">
  <a href="https://syire.github.io/tony-jump/">Demo online</a>
  ·
  <a href="#funzionalita">Funzionalità</a>
  ·
  <a href="#installazione">Installazione</a>
  ·
  <a href="#deploy">Deploy</a>
</p>

---

## Panoramica

**Tony Jump** è un mini-game arcade in cui il giocatore deve saltare sempre più in alto e provare a scalare la classifica globale.

Il progetto nasce come gioco web leggero, pensato per funzionare bene sia da desktop sia da smartphone. La leaderboard online salva i migliori punteggi tramite Supabase e riconosce il giocatore con un'identità persistente salvata nel browser.

---

## Funzionalità

- Gameplay arcade basato sul salto verticale.
- Leaderboard online con punteggi ordinati per score.
- Identità giocatore persistente tramite `localStorage`.
- Salvataggio del miglior punteggio personale senza duplicati.
- Classifica responsive con visualizzazione a pagine.
- Evidenziazione della posizione del giocatore corrente.
- Supporto mobile e sensori di movimento.
- Player musicale integrato.
- Deploy su GitHub Pages.

---

## Stack tecnico

| Area | Tecnologia |
| --- | --- |
| Frontend | React |
| Build tool | Vite |
| Linguaggio | TypeScript |
| Routing | React Router |
| Database | Supabase |
| Hosting | GitHub Pages |
| Styling | CSS custom |

---

## Struttura del progetto

```text
src/
├── app/
│   └── SettingsContext.tsx
├── components/
│   └── GameCanvas.tsx
├── pages/
│   ├── GamePage.tsx
│   ├── Home.tsx
│   ├── LeaderBoard.tsx
│   └── css/
├── services/
│   ├── scoresApi.ts
│   └── supabaseClient.ts
├── utils/
│   └── playerName.ts
└── main.tsx
```

---

## Installazione

Clona il repository:

```bash
git clone https://github.com/Syire/tony-jump.git
cd tony-jump
```

Installa le dipendenze:

```bash
npm install
```

Avvia il progetto in locale:

```bash
npm run dev
```

Apri il browser su:

```text
http://localhost:5173
```

---

## Variabili ambiente

Crea un file `.env` nella root del progetto:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

Queste variabili vengono usate per collegare il frontend al progetto Supabase.

---

## Database Supabase

La leaderboard usa una tabella `scores`.

Struttura consigliata:

```sql
create table if not exists public.scores (
  id uuid primary key default gen_random_uuid(),
  player_id text,
  player_name text not null,
  score integer not null,
  created_at timestamptz not null default now()
);
```

Per evitare duplicati dello stesso giocatore:

```sql
create unique index if not exists scores_player_id_unique
on public.scores(player_id)
where player_id is not null;
```

Per evitare nomi duplicati in classifica:

```sql
create unique index if not exists scores_player_name_unique
on public.scores (lower(trim(player_name)));
```

---

## Script disponibili

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Genera la build di produzione |
| `npm run preview` | Mostra la build in locale |
| `npm run deploy` | Pubblica la cartella `dist` su GitHub Pages |

---

## Deploy

Il progetto è configurato per GitHub Pages.

Nel file `vite.config.js` il path base deve corrispondere al nome del repository:

```ts
base: "/tony-jump/"
```

Nel file `package.json` la homepage deve puntare all'URL pubblico:

```json
"homepage": "https://syire.github.io/tony-jump"
```

Per generare e pubblicare la build:

```bash
npm run build
npm run deploy
```

---

## Workflow Git consigliato

Il progetto usa branch separati per ogni modifica e messaggi in stile Conventional Commits.

Esempi:

```bash
feat(player): persist player identity for scores
feat(leaderboard): show current player position
style(leaderboard): improve responsive book layout
fix(player): avoid truncating generated names
chore(project): rename deployment path to tony jump
```

Branch naming consigliato:

```text
feat/nome-feature
fix/nome-bug
style/nome-ui
chore/nome-configurazione
```

---

## Stato del progetto

Tony Jump è un progetto in evoluzione. Le aree principali già presenti sono:

- gameplay base;
- leaderboard online;
- identità giocatore persistente;
- supporto responsive;
- deploy pubblico.

Possibili miglioramenti futuri:

- schermata profilo giocatore;
- cambio nome controllato dalla UI;
- paginazione Supabase lato database;
- animazioni più curate nella leaderboard;
- miglioramento progressivo della home mobile.

---

## Licenza

Questo progetto è personale e dimostrativo. Aggiungi una licenza se vuoi renderlo riutilizzabile pubblicamente.
