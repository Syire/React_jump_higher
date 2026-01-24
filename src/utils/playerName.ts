const STORAGE_KEY = "tony_player_name";

const ADJECTIVES = [
  "Elegante", "Sborone", "Spaccone", "Figo", "Sfrontato", "Chic", "Tamarro", "Carismatico", "Irriverente", "Sorridente", "Abbronzato", "Sicuro", "Esagerato", "Simpatichissimo", "Inconfondibile"
];

const NOUNS = [
  "Rayban", "Cravatta", "Giacca", "Pitony", "Tony", "Occhialone", "ScarpaLucida", "CapelloFissato", "SelfieKing", "MemeBoss", "Catenone", "Sorrisone", "Briatore", "CiaoBellezza", "SignorPitony"
];

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomName() {
  return `${randomItem(ADJECTIVES)}${randomItem(NOUNS)}${Math.floor(
    Math.random() * 100
  )}`;
}

export function getPlayerName(): string {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;

  const randomName = generateRandomName();
  localStorage.setItem(STORAGE_KEY, randomName);
  return randomName;
}

export function setPlayerName(name: string) {
  localStorage.setItem(STORAGE_KEY, name);
}
