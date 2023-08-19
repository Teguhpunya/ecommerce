const fetchData = async (
  query: string,
  variables: {
    search: string,
    page: number
  }) => {
  const url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    }

  const res = await fetch(url, options)
  const data = await res.json()
  return data
}

export default fetchData