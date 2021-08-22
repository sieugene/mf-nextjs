import dynamic from "next/dynamic";

const RemoteCube = dynamic(() => import("app1/cube"), { ssr: false });

const App1 = () => <RemoteCube />;

export default App1;
