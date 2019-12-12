//export  function getRepos(date,page){
   
   // const url = 'https://api.github.com/search/repositories?q=created:%3E'+date+'&sort=stars&order=desc&page=1&per_page=50' 

   // return fetch('https://api.github.com/search/repositories?q=created:%3E'+date+'&sort=stars&order=desc&per_page=20&page='+page)
    //  .then((response) => response.json())
     // .catch((error) =>{
      //  console.error(error);
      //})
//}


export const REPOS_URL='https://api.github.com/search/repositories?q=created:%3E';

export const REPOS_OPT_URL='&sort=stars&order=desc&per_page=20&page=';

