import dynamic from "next/dynamic";

const RemoteCube = (await import("app1/cube")).default;

const App1 = () => <RemoteCube />;

export default App1;
