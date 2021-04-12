import { useParams } from 'react-router-dom';

function Character() {
  const { name } = useParams<{ name?: string }>();
  
  return <div></div>
}

export default Character;