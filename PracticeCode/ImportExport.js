

//  Import & Export

//  In test.js file
    const testing = () => {
        console.log("testing");
    }
  const p = 10;
  export p;
  export defult testing;

//In app.js file
  import {abcd} from './test';    //importing defult value
  import {p} from './test';       //importing p variable





