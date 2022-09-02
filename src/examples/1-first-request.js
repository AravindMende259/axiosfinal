import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const [disp, setDisp] = useState([]);

  const fetchMeth = async () => {
    const resp = await axios.get(url);
    const disp = resp.data;
    setDisp(disp);
    console.log(disp);
  };

  useEffect(() => {
    fetchMeth();
    //  console.log("data coming her checking",data)
  }, []);

  return (
    <div class="row">
       <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
       <div class="card">
      {disp.map((dis) => {
        return (
          <div key={dis.id} className="d-flex justify-content-between p-3">
            <img src={dis.image} alt={dis.name} height="250" width="400" />
            <h4>{dis.name}</h4>
            <p style={{justifyContent:"center"}}>{dis.description}</p>
            <i><b>{dis.price}</b></i>
          </div>
        );
      })}
      </div>
      </div>
    </div>
  );
};
export default FirstRequest;
