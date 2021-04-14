import { useState } from 'react';
import Move from './showPokemon/Move';
import Pagination from './Pagination';
import styled from '@emotion/styled';

function MovesPagination({ pokemon }) {
  const [currentPage, setCurrentPage] = useState(1);
  const limit =  6;
  return (
    <StyledMovesPagination>
      <StyledContainer>
        <StyledMoves>
          {pokemon.moves
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((objmMove) => (
              <Move move={objmMove.move} />
            ))}
        </StyledMoves>
        <Pagination
          limit={limit}
          total={pokemon.moves.length}
          page={currentPage}
          onSelectPage={setCurrentPage}
        />
      </StyledContainer>
    </StyledMovesPagination>
  );
}

const StyledMovesPagination = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledMoves = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 10px;
  justify-items: center;

  @media screen and (max-width: 385px) {
    grid-template-columns: 1fr;
  }
` 

export default MovesPagination;
