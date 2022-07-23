export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <span>hello</span>
    </div>
  );
}
