import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelectors';
import { useActions } from '../hooks/useActions';

const PackagesList: React.FC = () => {

  const [term, setTerm] = useState("")
  const { searchPackage } = useActions()
  const { data, loading, error } = useTypedSelector((state)=> state.packages)

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    searchPackage(term)
  }
  
  return <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>

            { error && <h3>{error}</h3> }
            { loading && <h3>Loading...</h3> }
            { !error && !loading && data.map((name)=>(
              <div key={name}>{name}</div>
            ))
            }
        </div>;
};

export default PackagesList;
