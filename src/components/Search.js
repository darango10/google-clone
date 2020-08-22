import React, {useState} from 'react';
import '../css/search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom'
import {actionTypes} from "../reducer";
import {useStateValue} from "../StateProvider";

const Search = ({hideButtons = false}) => {

    const [{}, dispatch] = useStateValue()
    const [input, setInput] = useState('');
    const history = useHistory();


    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            payload: input
        })
        history.push('/search')
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"/>
                <MicIcon/>
            </div>

            {!hideButtons
                ?
                <div className="search__buttons">
                    <Button
                        type='submit'
                        onClick={search}
                        variant="outlined"
                    >Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
                :
                <div className="search__buttonsHidden">
                    <Button
                        type='submit'
                        onClick={search}
                        variant="outlined"
                    >Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            }


        </form>
    );
};

export default Search;
