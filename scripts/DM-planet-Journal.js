//[d6 = tier roll, d12 = tier result roll, d100 = name roll, d100 = name modifier roll, d20 = civ quirk roll, d20 = nat quirk roll, d12= planet trait]
async function generatePlanet(id) {
  const rollPool = {
    tier       : 6,
    tierResult : 12,
    name       : 100,
    quirk      : 20,
    trait      : 12,
    //quick roll all dice
    get tableRolls() {
      return {
        id         : id,
        tier       : rollDice(this.tier),
        tierResult : rollDice(this.tierResult),
        name       : rollDice(this.name),
        nameMod    : rollDice(this.name),
        quirkA     : rollDice(this.quirk),
        quirkB     : rollDice(this.quirk),
        trait      : rollDice(this.trait)
      };
    }
  };

  //dice roll function
  function rollDice(num) {
    return Math.floor(Math.random() * num + 1);
  }

  //create name modification
  function suffix(num) {
    //mod options
    let retStr = '';
    if (num > 50) {
      let rolls = {
        numA        : rollDice(10),
        numB        : rollDice(10),
        letter      : rollDice(26),
        letterPlace : rollDice(3)
      };

      //arrange suffix characters
      if (rolls.letterPlace == 3) {
        retStr = `${rolls.numA}` + `${rolls.numB}` + `${rolls.letter}`;
      }
      else if (rolls.letterPlace == 2) {
        retStr = `${rolls.numA}` + `${rolls.letter}` + `${rolls.numB}`;
      }
      else {
        retStr = `${rolls.letter}` + `${rolls.numA}` + `${rolls.numB}`;
      }
    }
    else if (num > 20) {
      retStr = planetTable().nameModB[rollDice(10)];
    }
    else {
      retStr = planetTable().nameModA;
    }

    return retStr;
  }
  //create object containing planet roll results data
  function makePlanet(obj, id) {
    const planetObj = {};
    const name = obj.tier == 6 ? planetTable().name[obj.name] + `-X` : planetTable().name[obj.name];
    const tierInfo =
      obj.tier == 6
        ? planetTable().tier[obj.tier].results[obj.tierResult] +
          `<br/>` +
          `<br/>` +
          planetTable().tier[rollDice(5)].results[rollDice(12)]
        : planetTable().tier[obj.tier].results[obj.tierResult];

    planetObj.suffix = suffix(obj.nameMod);
    planetObj.name = name;
    planetObj.tier = obj.tier;
    planetObj.tierInfo = tierInfo;
    planetObj.civQuirk = planetTable().civQuirk[obj.quirkA];
    planetObj.natQuirk = planetTable().natQuirk[obj.quirkB];
    planetObj.planetTrait = planetTable().trait[obj.trait];
    if (id) {
      planetObj.folder = id;
    }
    return planetObj;
  }
  //build journal entry contents, create journal entry
  async function planetJournal(obj) {
    let name = obj.name + ' ' + obj.suffix;
    let content = `
          <h1>${name} - Tier ${obj.tier}</h1>
          <div>
          <p>${obj.tierInfo}</p>
          </div>
          <div>
          <br/>
          <h2>Civilization Quirk:</h2>
          <p>${obj.civQuirk}</p>
          <br/>
          <h2>Natuarl Quirk:</h2>
          <p>${obj.natQuirk}</p>
          <br/>
          <h2>Planet Trait:</h2>
          <p>${obj.planetTrait}</p>
          </div>
          `;
    await JournalEntry.create({
      content : content,
      folder  : obj.folder,
      name    : `Planet ${name}`
    });
  }

  planetJournal(makePlanet(rollPool.tableRolls, id));
}
