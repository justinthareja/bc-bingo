import Grid from "../components/Grid";
import { BINGO_OPTIONS } from "../utils/bingoOptions";

export default function Bingo() {
  const columns = 5;
  const rows = 5;

  return (
    <section>
      <Grid columns={columns} rows={rows}>
        {BINGO_OPTIONS.map((text) => (
          <div key={text}>{text}</div>
        ))}
      </Grid>
    </section>
  );
}
