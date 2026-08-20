
const members = [
  { name: "An",   plan: "premium", isActive: true  },
  { name: "Bình", plan: "free",    isActive: true  },
  { name: "Chi",  plan: "premium", isActive: false },
  { name: "Dung", plan: "free",    isActive: true  },
];

const premiumMembers = members.filter(member => member.plan === "premium" && member.isActive === true);
const memberNames = members.map(member => member.name);
const memberByName = members.find(member => member.name === "Bình");

console.log("Premium members:", premiumMembers);
console.log("Member names:", memberNames);
console.log("Member by name:", memberByName);
