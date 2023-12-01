import { useOutletContext} from "react-router-dom";



const Cast = () => {

  const { actors }  = useOutletContext();
    return (
      <div>
        {actors ? (
          <div>
            <h3 style={{ marginInline: 40, marginBlock: 25 }}>CAST:</h3>
            <ul style={{ lineHeight: 1.4 }}>
              {actors?.map(actor => (
                <li key={actor.id}>
                  {actor.character} -{actor.name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
 }
export default Cast;