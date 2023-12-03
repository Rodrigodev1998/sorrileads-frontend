import { useState } from 'react';
import MenuAppBar from '../../components/AppBar';
import TableLeads from '../../components/TableLeads';
import SearchInput from '../../components/inputSearch';
import './style.css';

export function Home() {
    const [searchData, setSearchData] = useState('');

    const handleSearch = (text) => {
        setSearchData(text);
    };
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <MenuAppBar/>
                </div>
                <div className='filters'>
                    <SearchInput className='searchInput' onSearch={handleSearch} />
                </div>
                <div className='col'>
                    <div className='table'>
                        <TableLeads searchData={searchData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}