import './style';
import App from './app';

if (process.env.NODE_ENV !== "production") {
	require("preact/devtools");
}

export default App;
