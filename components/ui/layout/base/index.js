import { Web3Provider } from "@components/providers";
import { Navbar, Footer } from "@components/ui/common";
import Head from "next/head";

export default function BaseLayout({ children }) {
  return (
    <Web3Provider>
      <Head>
        <title>BlockTune</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="fit bg-zinc-800">{children}</div>
      <Footer />
    </Web3Provider>
  );
}
