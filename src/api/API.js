
export const REPOS_URL='https://api.github.com/search/repositories?q=created:%3E'; //the main querry

export const REPOS_OPT_URL='&sort=stars&order=desc&per_page=20&page='; //the filters : 
                                                                              //note that we are searching for 20 items per page
                                                                              //order : desc
                                                                              //ranking by stars.
