export function analyzeTrash(projectName, teamName, description = '') {
  const score = {
    usefulness: getRandom(0, 25),
    overthinking: getRandom(0, 20),
    redundancy: getRandom(0, 15),
    juiceToSqueeze: getRandom(0, 15),
    unoriginality: getRandom(0, 10),
    wowFactor: getRandom(0, 10),
    execution: getRandom(0, 5),
  };

  const total = Object.values(score).reduce((sum, val) => sum + val, 0);

  const tooUseful = total < 40;
  const label = getLabel(description || '');
  const commentary = generateCommentary(description || '', total);
  const jury = generateFakeJury();

  return {
    projectName,
    teamName,
    totalScore: total,
    scoreBreakdown: score,
    tooUseful,
    label,
    commentary,
    jury,
  };
}

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getLabel(desc = '') {
  const lowered = desc.toLowerCase();
  if (lowered.includes("ai")) return "AI-washing 🧠🧼";
  if (lowered.includes("blockchain")) return "Web3 Ghost Project 👻";
  if (lowered.includes("diary")) return "Digital Nostalgia 📓";
  if (lowered.includes("climate")) return "Eco-nonsense 🌍";
  return "Experimental Headache 🤯";
}

function generateCommentary(desc = '', total) {
  if (total > 90) return "This is peak trash. An insult to innovation. Bravo. 🏆";
  if (total > 70) return "Delightfully dumb. We love it. 💩";
  if (total > 50) return "It's trashy, but we’ve seen worse. 🤷‍♀️";
  return "Honestly… this might be useful. We're deeply disappointed. 😔";
}

function generateFakeJury() {
  const names = ["Prof. Binod", "Dr. Trashit Roy", "GPT ChaCha", "Karen from HR"];
  const quotes = [
    "I had to lie down after reading this idea.",
    "Revolutionary — in all the wrong ways.",
    "I would *never* use this. Ever.",
    "Is this satire? Please say yes.",
  ];
  return names.map((name, i) => ({
    name,
    comment: quotes[i % quotes.length],
  }));
}
