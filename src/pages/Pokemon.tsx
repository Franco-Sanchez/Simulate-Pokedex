import { useParams } from 'react-router-dom';

function Pokemon() {
  const { name } = useParams<{ name?: string }>();
  
  return <div>{name}</div>
}

export default Pokemon;