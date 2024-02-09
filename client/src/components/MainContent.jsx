import BlackGraveyard from "./BlackGraveyard";
import Board from "./Board";
import BoardButtons from "./BoardButtons";
import WhiteGraveyard from "./WhiteGraveyard";

const MainContent = () => {
  return(
    <>
      <p>Main Content</p>
      <BlackGraveyard />
      <Board />
      <WhiteGraveyard />
      <BoardButtons />
    </>
  )
}

export default MainContent;