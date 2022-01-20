import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

const PackagesList: React.FC = () => {

  const [term, setTerm] = useState("")
  const { searchPackage } = useActions()

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    searchPackage(term)
  }
  
  return <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>;
};

export default PackagesList;
