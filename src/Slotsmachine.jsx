function SlotsMachine({ slot1, slot2, slot3 }) {
  const winStatus = slot1 === slot2 && slot1 === slot3 && slot2 === slot3;
  return (
    <main>
      <h1>
        {slot1}|{slot2}|{slot3}
      </h1>
      <h2 style={{ color: winStatus ? "green" : "red" }}>
        {winStatus ? "You win!!" : "You Lose..."}
      </h2>
      {winStatus ? <h3>Congrats!!!!</h3> : ""}
    </main>
  );
}

export default SlotsMachine;
