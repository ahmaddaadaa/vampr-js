class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this_ Vampire/
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let result = 0;
    let vampire = this;

    while (vampire.creator) {
      result++;
      vampire = vampire.creator;
    }

    return result;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }


/** Stretch **/

// Returns the closest common ancestor of two vampires.
// The closest common anscestor should be the more senior vampire if a direct ancestor is used.
// For example:
// * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
// * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
closestCommonAncestor(vampire) {
  if (this === vampire) {
    return this;
  }

  const groupOne = [this];
  const groupTwo = [vampire];

  let vampireOne = this;
  let vampireTwo = vampire;

  while (vampireOne.creator) {
    groupOne.unshift(vampireOne.creator);
    vampireOne = vampireOne.creator;
  }

  while (vampireTwo.creator) {
    groupTwo.unshift(vampireTwo.creator);
    vampireTwo = vampireTwo.creator;
  }

  let result = null;

  for (let i = 0; i < Math.min(groupOne.length, groupTwo.length); i++) {
    if (groupOne[i] !== groupTwo[i]) {
      break;
    }
    result = groupOne[i];
  }

  return result;
}

}

module.exports = Vampire;

