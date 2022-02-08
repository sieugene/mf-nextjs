import dynamic from "next/dynamic";

// production build not support SSR and dynamic paths
const loadComponentWithRetry = async (count: number) => {
  if (count <= 2) {
    try {
      const component = (await import("app1/cube")).default;
      return component;
    } catch (error) {
      console.log(count, "count!!!!!!");
      loadComponentWithRetry(count + 1);
    }
  }
  return dynamic(() => import("app1/cube"), { ssr: false });
};

const RemoteCube = await loadComponentWithRetry(0);

const App1 = () => <RemoteCube />;

export default App1;
