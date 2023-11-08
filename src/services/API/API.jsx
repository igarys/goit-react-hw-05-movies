 
// const API_KEY = '9b869e87921daf5eab7f2f605ad1504f';


 export const fetchApi = () => {
     
 }
 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization:
       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yjg2OWU4NzkyMWRhZjVlYWI3ZjJmNjA1YWQxNTA0ZiIsInN1YiI6IjY1MWM3Mzc2MDcyMTY2MDBlMmQ3ODYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mNNnID6mvBn_Bg54qir3L5B-pyUcTFz7W9ClX2luIb0',
   },
 };

fetch(
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&region=USA',
  options
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));