const funFacts = [
    "A group of flamingos is called a 'flamboyance.'",
    "The unicorn is Scotland's national animal.",
    "Honeybees can recognize human faces.",
    "The shortest war in history lasted just 38 minutes, fought between Britain and Zanzibar on August 27, 1896.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "The world's oldest known recipe is a beer recipe from ancient Sumeria, dated to around 4,000 years ago.",
    "The world's quietest room is so quiet that you can hear your own organs, including your heartbeat and stomach gurgling.",
    "The world's largest desert is not the Sahara; it's Antarctica.",
    "The longest hiccuping spree lasted for 68 years.",
    "A day on Venus is longer than its year. Venus takes about 243 Earth days to complete one rotation on its axis, while its year (orbiting the sun) takes only about 225 Earth days.",
    "The first recorded game of baseball was played in 1846 in Hoboken, New Jersey.",
    "The Great Wall of China is not visible from space with the naked eye, despite the common myth.",
    "There's a basketball court on the top floor of the U.S. Supreme Court Building. It's known as the 'Highest Court in the Land.'",
    "The longest word in the English language without a vowel is 'rhythms.'",
    "The dot over the letter 'i' is called a 'tittle.'",
    "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
    "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron in the heat.",
    "Cows have best friends and can become stressed when they are separated from them.",
    "The world's smallest mammal is the bumblebee bat, which weighs less than a penny.",
    "The first recorded game of basketball was played with a soccer ball.",
    "The longest hiccuping spree lasted for 68 years.",
    "A day on Venus is longer than its year. Venus takes about 243 Earth days to complete one rotation on its axis, while its year (orbiting the sun) takes only about 225 Earth days.",
    "The unicorn is Scotland's national animal.",
    "A group of flamingos is called a 'flamboyance.'",
    "Honeybees can recognize human faces.",
    "The Great Wall of China is not visible from space with the naked eye, despite the common myth.",
    "The first computer programmer was a woman named Ada Lovelace.",
    "There's a basketball court on the top floor of the U.S. Supreme Court Building. It's known as the 'Highest Court in the Land.'",
    "The longest word in the English language without a vowel is 'rhythms.'",
    "The shortest war in history was fought between Britain and Zanzibar on August 27, 1896. It lasted just 38 minutes.",
    "The first recorded game of baseball was played in 1846 in Hoboken, New Jersey.",
    "The world's largest desert is not the Sahara; it's Antarctica.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "The world's oldest known recipe is a beer recipe from ancient Sumeria, dated to around 4,000 years ago.",
    "Bananas are berries, but strawberries are not.",
    "The dot over the letter 'i' is called a 'tittle.'",
    "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
    "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron in the heat.",
    "Cows have best friends and can become stressed when they are separated from them.",
    "The world's smallest mammal is the bumblebee bat, which weighs less than a penny.",
    "The first recorded game of basketball was played with a soccer ball.",
    "The longest hiccuping spree lasted for 68 years."
];

// To access a fact from the array, you can use funFacts[index], where index is the position of the fact in the array (0 to 49).
console.log("array length",funFacts.length)
function laugh()
{
    let randomInteger = Math.floor(Math.random() * 41) + 1; // Generates a random integer between 1 and 10
    console.log(randomInteger);
    document.getElementById("joke").innerHTML=funFacts[randomInteger];

}
