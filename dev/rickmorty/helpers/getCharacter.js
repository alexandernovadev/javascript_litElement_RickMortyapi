export const getCharacters = async () => {
  const api ="https://rickandmortyapi.com/api";
  const url = `${api}/character`;

  const resp = await fetch(url);

  const {results}  = await resp.json();

  const characters = results.map((
    {id, status,species ,image,name}) => {
    return {
      id,
      name,
      status,
      species, 
      image
    };
  });

  return characters;
};