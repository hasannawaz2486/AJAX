
// testing 3rd 

// import React, { useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
// import axios from 'axios';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// function App() {
//   const [baseCurrency, setBaseCurrency] = useState('');
//   const [targetCurrency, setTargetCurrency] = useState('');
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const exchangeApiKey = 'a29732bfc3808d072a9ca01a';

//   const handleBaseCurrencyChange = (event) => {
//     setBaseCurrency(event.target.value.toUpperCase());
//   };

//   const handleTargetCurrencyChange = (event) => {
//     setTargetCurrency(event.target.value.toUpperCase());
//   };

//   const handleGetExchangeRate = async () => {
//     try {
//       const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}?apiKey=${exchangeApiKey}`);
//       const rates = response.data.rates;
//       const rate = rates[targetCurrency];
//       if (rate) {
//         setExchangeRate(rate);
//       } else {
//         setExchangeRate(null);
//       }
//     } catch (error) {
//       console.error('Error fetching exchange rate:', error);
//       setExchangeRate(null);
//     }
//   };

//   return (
//     <MDBContainer className="my-5">
//       <MDBRow className="justify-content-center">
//         <MDBCol md="6">
//           <MDBCard>
//             <MDBCardBody>
//               <MDBCardTitle className="text-center">Currency Exchange Rate</MDBCardTitle>
//               <MDBRow>
//                 <MDBCol>
//                   <MDBInput
//                     label="Base Currency"
//                     value={baseCurrency}
//                     onChange={handleBaseCurrencyChange}
//                   />
//                 </MDBCol>
//                 <MDBCol>
//                   <MDBInput
//                     label="Target Currency"
//                     value={targetCurrency}
//                     onChange={handleTargetCurrencyChange}
//                   />
//                 </MDBCol>
//               </MDBRow>
//               <MDBBtn color="primary" onClick={handleGetExchangeRate} style={{display:"block",width:"100%",marginTop:"10px"}}>
//                 Get Exchange Rate
//               </MDBBtn>

//               {exchangeRate !== null && (
//                 <div className="mt-4">
//                   <MDBCardText>
//                     <h4>Exchange Rate</h4>
//                     <p>1 {baseCurrency} = {exchangeRate} {targetCurrency}</p>
//                   </MDBCardText>
//                 </div>
//               )}
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default App;

//  test 4

// import axios from 'axios';
// import React, { useState } from 'react'

// const Test = () => {
//     const [baseCurrency, setBaseCurrency] = useState('');
//   const [targetCurrency, setTargetCurrency] = useState('');
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const exchangeApiKey = 'a29732bfc3808d072a9ca01a';

//   const handleBaseCurrencyChange = (event) => {
//     setBaseCurrency(event.target.value.toUpperCase());
//   };

//   const handleTargetCurrencyChange = (event) => {
//     setTargetCurrency(event.target.value.toUpperCase());
//   };

//   const handleGetExchangeRate = async () => {
//     try {
//       const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}?apiKey=${exchangeApiKey}`);
//       const rates = response.data.rates;
//       const rate = rates[targetCurrency];
//       if (rate) {
//         setExchangeRate(rate);
//       } else {
//         setExchangeRate(null);
//       }
//     } catch (error) {
//       console.error('Error fetching exchange rate:', error);
//       setExchangeRate(null);
//     }
//   };
//   return (
//     <div>
//       <h1>Exchange Rate</h1>
//       <div>
//         <label>Base Currency:</label>
//         <input type="text" value={baseCurrency} onChange={handleBaseCurrencyChange} />
//       </div>
//       <div>
//         <label>Target Currency:</label>
//         <input type="text" value={targetCurrency} onChange={handleTargetCurrencyChange} />
//       </div>
//       <button onClick={handleGetExchangeRate}>Get Exchange Rate</button>
//       <div>
//         <h2>Exchange Rate:</h2>
//         <p>1 {baseCurrency} = {exchangeRate} {targetCurrency}</p>
//       </div>
//     </div>
//   )
// }

// export default Test


//  test 5


// import axios from 'axios';
// import React, { useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

// const Test = () => {
//   const [baseCurrency, setBaseCurrency] = useState('');
//   const [targetCurrency, setTargetCurrency] = useState('');
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const exchangeApiKey = 'a29732bfc3808d072a9ca01a';

//   const handleBaseCurrencyChange = (event) => {
//     setBaseCurrency(event.target.value.toUpperCase());
//   };

//   const handleTargetCurrencyChange = (event) => {
//     setTargetCurrency(event.target.value.toUpperCase());
//   };

//   const handleGetExchangeRate = async () => {
//     try {
//       const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}?apiKey=${exchangeApiKey}`);
//       const rates = response.data.rates;
//       const rate = rates[targetCurrency];
//       if (rate) {
//         setExchangeRate(rate);
//       } else {
//         setExchangeRate(null);
//       }
//     } catch (error) {
//       console.error('Error fetching exchange rate:', error);
//       setExchangeRate(null);
//     }
//   };

//   return (
//     <MDBContainer className="my-5">
//       <MDBRow className="justify-content-center">
//         <MDBCol md="6">
//           <div>
//             <h1 className="text-center mb-4">Exchange Rate</h1>
//             <div className="mb-3">
//               <MDBInput label="Base Currency" value={baseCurrency} onChange={handleBaseCurrencyChange} />
//             </div>
//             <div className="mb-3">
//               <MDBInput label="Target Currency" value={targetCurrency} onChange={handleTargetCurrencyChange} />
//             </div>
//             <MDBBtn color="primary" onClick={handleGetExchangeRate} className="w-100 mb-3">
//               Get Exchange Rate
//             </MDBBtn>
//             <div>
//               <h2>Exchange Rate:</h2>
//               <p>1 {baseCurrency} = {exchangeRate} {targetCurrency}</p>
//             </div>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Test;




// test 6 latest 4 was working nd this is also working

import axios from 'axios';
import React, { useState } from 'react'

const Test = () => {
    const [baseCurrency, setBaseCurrency] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [exchangeRate, setExchangeRate] = useState(null);
    const exchangeApiKey = 'a29732bfc3808d072a9ca01a';

    const handleBaseCurrencyChange = (event) => {
        setBaseCurrency(event.target.value.toUpperCase());
    };

    const handleTargetCurrencyChange = (event) => {
        setTargetCurrency(event.target.value.toUpperCase());
    };

    const handleGetExchangeRate = async () => {
        try {
            const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}?apiKey=${exchangeApiKey}`);
            const rates = response.data.rates;
            setExchangeRate(rates)
           
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
            setExchangeRate(null);
        }
    };
    return (
        <div>
            <h1>Exchange Rate</h1>
            <div>
                <label>Base Currency:</label>
                <input type="text" value={baseCurrency} onChange={handleBaseCurrencyChange} />
            </div>
            <button onClick={handleGetExchangeRate}>Get Exchange Rate</button>
            {exchangeRate !== null && (
                <div>
                    <h2>Exchange Rate:</h2>
                    {
                        Object.keys(exchangeRate).map((currency)=>{
                            return <p>{currency} : {exchangeRate[currency]}</p>
                        })
                    }
                </div>
            )
        }
        </div>
    )
}

export default Test