/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import PriceInBTC from "../islands/PriceInBTC.tsx";
const url: string = "https://api.coindesk.com/v1/bpi/currentprice.json";

export const handler: Handlers<Price | null> = {
  async GET(_, ctx) {
    const res = await fetch(url);
    if (res.status === 200) {
      const price: Price = await res.json();
      return ctx.render(price);
    }
    return ctx.render(null);
  },
};

export default function Home({ data }: PageProps<Price | null>) {
  if (!data) {
    return <h1>Data is not available</h1>;
  }

  return (
    <div class={tw`w-screen h-screen bg-gray-900`}>
      <div class={tw`p-4 mx-auto max-w-screen-md bg-gray-900`}>
        <img
          src="/logo.svg"
          width="200px"
          class="mx-auto"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-10 text(center 3xl white)`}>
          Current Average Cost of Lemons (0.5 kg) in BTC
        </p>
        <PriceInBTC usdRate={data.bpi.USD.rate} />
        <p class={tw`my-10 text(center 3xl white)`}>
          Last fetched at {data.time.updated}
        </p>
      </div>
    </div>
  );
}
