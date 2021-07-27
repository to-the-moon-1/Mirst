import './App.css';
import {Container} from "@material-ui/core";
import Header from "./components/header/Header";
import {Switch, Route} from "react-router-dom";
import Mirst from "./components/mirst/Mirst";

function App() {
    return (
        <Container maxWidth="xl" className="container-page">
            <Header />
            <Container maxWidth="md" className="container-content">
                <div className="main-content">
                    <Switch>
                        <Route exact path="/" component={Mirst} />
                        <Route path="/view" />
                    </Switch>
                </div>
            </Container>
        </Container>
    );
}

export default App;
