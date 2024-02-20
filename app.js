let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generador( pronoun, adj, noun ){
for( let i=0;i<pronoun.length;i=i+1){
  for( let j=0;j<adj.length;j=j+1){
  for( let k=0;k<noun.length;k=k+1){
    let total=(pronoun[i] + adj [j] + noun[k] +".com ")
     console.log(total) 
  }
  }
}

}
console.log (generador( pronoun, adj, noun ))