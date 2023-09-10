function getRepoData() {
   return fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      {
        console.log('API WAS CALLED')
        return res.json()
      }
    )
}

export { getRepoData };