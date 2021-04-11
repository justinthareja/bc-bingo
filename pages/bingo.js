import { Grid, GridCell } from "../components/Grid";
import { BINGO_OPTIONS } from "../utils/bingoOptions";

export default function Bingo() {
  const columns = 5;
  const rows = 5;
  const options = BINGO_OPTIONS.slice(0, 25);

  return (
    <section>
      <Grid columns={columns} rows={rows}>
        {options.map((text) => (
          <GridCell key={text}>{text}</GridCell>
        ))}
      </Grid>
    </section>
  );
}
