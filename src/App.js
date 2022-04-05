import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import UsersTable from './components/usersTable';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <div  className='container'>
          <h1 className='text-center my-3'>لیست کاربران</h1>
          <UsersTable />
        </div>    
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
