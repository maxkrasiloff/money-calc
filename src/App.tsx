import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import 'fontsource-roboto';
import { ThemeProvider } from '@material-ui/styles';
import { generalTheme } from './themes/generalTheme';
import CoursesListContainer from './Components/CoursesList/CoursesListContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import CourseCalcContainer from './Components/Calc/CalcContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={generalTheme}>
          <BrowserRouter>
            <Header />
            <div className="mainContent">
              <Switch>
                <Route path="/courses" component={CoursesListContainer} />
                <Route path="/calc" component={CourseCalcContainer} />
                <Route path="/" component={CoursesListContainer} />
              </Switch>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>

    </div>
  );
}

export default App;
