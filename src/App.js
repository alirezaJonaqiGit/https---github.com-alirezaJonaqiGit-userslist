import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import UsersTable from './components/usersTable';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div  className='container'>
        <h1 className='text-center my-3'>لیست کاربران</h1>
        <UsersTable />
      </div>    
    </ThemeProvider>
  );
}

export default App;
