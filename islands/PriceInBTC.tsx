/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";

export default function PriceInBTC({ usdRate }) {
  const avgLemonPrice = 2;
  const lotsOfLemons = 1;
  const price = (avgLemonPrice * lotsOfLemons) / (parseFloat(usdRate) * 1000);
  return (
    <Fragment>
      <p class={tw`my-10 text(center 3xl white)`}>{price} BTC</p>
      <p class={tw`my-10 text(center 3xl white)`}>{avgLemonPrice} USD</p>
    </Fragment>
  );
}
