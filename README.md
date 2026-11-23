# Dad Joke Showdown

[![Dad Joke Showdown](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/upinhuy/dad-joke-showdown/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/upinhuy/dad-joke-showdown/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

An entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on [make.fun](https://make.fun/r/hv9zk8y5) — one original dad joke, at most 200 characters, judged head-to-head by an AI judge on which joke earns the bigger groan.

## The joke

> My son asked why I keep a ladder in the kitchen. I said, "The steaks are high, and someone has to raise the bar."

113 characters. A kitchen ladder, high steaks, and a bar that needs raising — the pun lands on the first read and the groan follows right after.

## How it works

`main.ts` is a small Node.js program using only the standard library (`node:fs`). It validates that the joke is 1–200 characters, creates `/output` if needed, and writes the joke verbatim to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
