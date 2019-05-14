import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import TitleDetail from './TitleDetail.js'
import Context from '../contexts/NetflixContext'
import Intro from '../components/Intro.js'

/* This component displays a table with three different formats(Icon, Detail and List) depending on the view property received*/

const Table = () => {
    return (     
            <Context.Consumer>
            {({state, changeView, fetchTitleDetail, sanitizeString}) => 
            <div>
        
            {/* View type selection buttons */}
            { state.allTitles.length > 0 &&
            <div>
                <span className="badge badge-light">Query returned {state.count} results</span>
                <div className="d-flex justify-content-center" style={{marginBottom:"10px"}}>     
                    <ButtonGroup size="sm" className="mt-4">
                        <Button variant="danger" onClick={() => {changeView('icon')}}>Icon</Button>
                        <Button variant="danger" onClick={() => {changeView('detail')}}>Detail</Button>
                        <Button variant="danger" onClick={() => {changeView('list')}}>List</Button>
                    </ButtonGroup>
                </div>
            </div>
            }

            { state.allTitles.length === 0 &&
               <Intro/>
            }

            {/* Icon View */}
            { 
                state.view === 'icon' &&
                <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap'}}>
                    {state.allTitles.map(title => <a href="#" onClick={()=>{fetchTitleDetail(title.netflixid)}}><img src={title.image} alt={title.title} style={{margin: '5px' ,width: '120px'}}/></a> )}
                </div>    
            } 

            {/* Detail View */}
            {
                state.view === 'detail' &&
                <div >
                    {state.allTitles.map(title => <a onClick={()=>{fetchTitleDetail(title.netflixid)}}><TitleDetail title={title} onclick={()=>{fetchTitleDetail(title.netflixid)}}/></a>)}
                </div>
            }

            {/* List View */}
            {
                state.view === 'list' &&
                <div >
                    <ol className="list-group">
                        {state.allTitles.map(title => 
                            <li > 
                            <b>{ sanitizeString(title.title)}</b> <p>{sanitizeString(title.synopsis)}</p><span class="badge badge-warning badge-pill">{title.rating}</span></li>)
                        }
                    </ol>
                </div>
            }
            </div>}
            </Context.Consumer>     
    )
}

export default Table;