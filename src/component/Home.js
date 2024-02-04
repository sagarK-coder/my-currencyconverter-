import React, { useEffect, useState, useCallback } from 'react';
import Axios from 'axios';

export default function Home(props) {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [info, setInfo] = useState({});
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState();

  useEffect(() => {
    Axios.get('app.json')
      .then(res => {
        setInfo(res.data.rates);
      })
      .catch(err => console.log(err));
  }, []);

  const convert = useCallback(() => {
    const rate = info[to];
    setOutput(amount * rate);
  }, [info, to, amount]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info, convert]);

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-12 col-md-5 mx-auto my-auto  shadow p-3 border">
          <div className={`row text-${props.mode==='light'?'dark':'info'}`}>
            <div className="col-12 py-3">
              <label className='fw-bold py-2'>Amount</label>
              <input type="text" className="form-control rounded-0" placeholder="amount" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="col-12 py-2">
              <label className='fw-bold py-2'>From</label>
              <div className="input-group mb-3">
                <select className="form-select rounded-0" id="inputGroupSelect01" onChange={(e) => setFrom(e.target.value)} value={from}>
                  {options.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 ">
              <label className='fw-bold py-2'>To</label>
              <div className="input-group mb-3">
                <select className="form-select rounded-0" id="inputGroupSelect01" onChange={(e) => setTo(e.target.value)} value={to}>
                  {options.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 text-center py-2">
              <h5>Convert Amount</h5>
              <h5>{amount + " " + from + " = " + output + " " + to}</h5>
              <button onClick={convert}>Convert</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
