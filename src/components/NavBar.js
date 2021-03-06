import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import * as Constants from '../data/constants';
import Genres from '../data/genres';
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actions';
import { clearAllContent, fetchNewTitles, fetchTitles, handleChange, luckyPick} from '../actions/actions';
import { bindActionCreators } from 'redux';
import AdvancedSearch from '../components/AdvancedSearch';

{/*This navbar component links to the following functions
    1. What's New - Displays new content from the past 7 days
    2. Lucky Pick - Gathers content with IMDB rating higher than 8 then picks one from the list
    3. Filters - Contains content filters for different genres
    4. Quick Search - Enables text input of title, actor or genre */}

const NetflixNav = (props) => {

    const submit = (values) => {
            props.fetchTitles('',
            values.startYear,
            values.endYear,
            values.type,
            values.genre,
            values.imdbMin,
            values.imdbMax
        );
    }

    return (
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={props.clearAllContent} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={ props.fetchNewTitles}>What's New</Nav.Link>
                <Nav.Link href="#" onClick={ () => props.luckyPick('', Constants.EARLIEST_PRODUCTION_YEAR, props.currentYear,
                                                                          Constants.ALL_TYPES, Constants.ALL_GENRES, Constants.IMDB_LUCKYPICK_MIN, 
                                                                          Constants.IMDB_LUCKYPICK_MAX)}>Lucky Pick</Nav.Link>
                {/* Maps genre list from the genres json file */}
                <NavDropdown title="Filters" id="basic-nav-dropdown" >
                    {Genres.map(genre => 
                        <NavDropdown.Item href="#" key={genre.id}
                            onClick={()=> {
                                props.fetchTitles(
                                    '',
                                    Constants.EARLIEST_PRODUCTION_YEAR, 
                                    props.currentYear,
                                    Constants.ALL_TYPES, 
                                    genre.id,
                                    Constants.DEFAULT_IMDB_MIN,  
                                    Constants.DEFAULT_IMDB_MAX)}}>
                            {genre.title}
                        </NavDropdown.Item>)}
                    <NavDropdown.Divider />
                    <NavDropdown.Item className='dropdown-submenu'href="#">Top Rated</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Advanced Search">
                       <AdvancedSearch onSubmit={submit}/>
                </NavDropdown>
            </Nav>
            
            {/* Quick Search  */}
            <Form inline onSubmit={e => { 
                e.preventDefault();
                props.fetchTitles(props.searchString, 
                    Constants.EARLIEST_PRODUCTION_YEAR, 
                    props.currentYear, 
                    Constants.ALL_GENRES, 
                    Constants.ALL_TYPES, 
                    Constants.DEFAULT_IMDB_MIN, 
                    Constants.DEFAULT_IMDB_MAX);
                }}>
                <FormControl className="mr-sm-2"
                    type="text"
                    placeholder="Quick Search"
                    name="searchString" 
                    value={props.searchString || ''} 
                    onChange={props.handleChange}            
                />
                <Button variant="outline-danger" type="submit">Search</Button>
            </Form>             
        </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        currentYear: state.main.currentYear,
        searchString: state.main.searchString
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps', dispatch);
    return bindActionCreators({
        clearAllContent: clearAllContent,
        fetchNewTitles: fetchNewTitles,
        fetchTitles: fetchTitles,
        handleChange: handleChange,
        luckyPick: luckyPick
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(NetflixNav);