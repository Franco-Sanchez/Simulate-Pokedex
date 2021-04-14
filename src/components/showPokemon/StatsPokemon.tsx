import { StatBox } from '../UI/containers';
import Stat from '../card/Stat';
import { StatText } from '../UI/texts';

function StatsPokemon({ stats }) {
  return (
    <>
      {stats.map((objStat, index) => (
        <StatBox profile key={index}>
          <Stat stat={objStat.base_stat} />
          <StatText>{objStat.stat.name}</StatText>
        </StatBox>
      ))}
    </>
  )
}

export default StatsPokemon;