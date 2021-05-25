function getAge() {
  const birthday = new Date("09/14/2000");
  const monthDiff = Date.now() - birthday.getTime();
  const ageDt = new Date(monthDiff); 
  const year = ageDt.getUTCFullYear();
  const age = Math.abs(year - 1970);
  document.querySelector('#age').innerHTML = `${age} anos`;
}

getAge();

