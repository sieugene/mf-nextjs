import dynamic from "next/dynamic";

const RemoteCube = dynamic(async () => {
  try {
    // SSR
    return (await import("app1/cube")).default;
  } catch (error) {
    // NO SSR
    return dynamic(() => import("app1/cube"), {
      ssr: false,
    });
  }
});

const App1 = () => {
  return <RemoteCube />;
};

export default App1;
