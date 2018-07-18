

export const isAudlt = (age) => {
  if(age > 18) {
    if(age > 21) {
      return console.log('is drinking age'); 
    }
    console.log('is audlt');
  } 
  console.log('is young'); 
}