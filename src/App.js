import logo from './logo.svg';
import './App.css';
import './index.js';


function App() {
  return (
<div>
  <header className="App-header">
<table >
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>Result</th>
          </tr>
          <tr>
            <td>Anand</td>
            <td>21</td>
            <td>Male</td>
            <td>New York</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>Jaswanth</td>
            <td>20</td>
            <td>Male</td>
            <td>Chennai</td>
            <td>Fail</td>
          </tr>
          <tr>
            <td>Gokul</td>
            <td>20</td>
            <td>Male</td>
            <td>Erode</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>Agash</td>
            <td>20</td>
            <td>Male</td>
            <td>Pondycherry</td>
            <td>Fail</td>
          </tr>
          <tr>
            <td>Hess</td>
            <td>20</td>
            <td>Male</td>
            <td>Coimbatore</td>
            <td>Pass</td>
          </tr>
        </table>
        <br/>
        <form>
        

      <label for="age">Username:</label>
      <input type="text" id="age" name="age"/><br/>
      <label for="gender">Password:</label>
      <input type="password" id="male" name="gender" /><br/>
      <button type="submit">Submit</button>
        </form>
        </header>

      </div>

  );
}

export default App;
