import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="nord">
      <Component {...pageProps} />
    </div>
  );
}
