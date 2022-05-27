import Styled from "./Status.styled";
import { useState, useEffect } from "react";
import StatusService from "../../services/status.service";
function Status() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    StatusService.getById().then(
      (response) => {
        setStatus(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <Styled>
      <input placeholder="Status Title" />
      <input placeholder="Color" />
      <button>Ekle</button>
      <div className="status-list">
        <ul>
          {status.map((status, index) => (
            <li key={index}>{status.title}<button>Renk Değiştir</button> <button>Update</button></li>
          ))}
        </ul>
      </div>
    </Styled>
  );
}

export default Status;
