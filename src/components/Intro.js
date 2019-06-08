import React from 'react';
import {Jumbotron, Badge, Row, Col} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch';
import {connect} from 'react-redux';

{/* Intro page containing a list of the new episodes and the advanced search form*/}
let Intro = (props) => {

    return (
        <Jumbotron >
            <Row>
                <Col>
                    <h1 className="d-flex justify-content-start">Welcome!</h1>
                    <hr className="my-4"></hr>
                    <h5><Badge variant="danger">NEW EPISODES</Badge></h5>
                    { props.episodes &&
                        <div>
                            {props.episodes.map(title => <li key={title.title}>{title.title}</li>)}
                        </div>
                    }
                </Col>
                <Col>
                    <h5><Badge variant="danger">DETAILED SEARCH</Badge></h5>   
                    {/* <AdvancedSearch store={Store}></AdvancedSearch> */}
                </Col>
            </Row>
        </Jumbotron>
    )
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes
    }
}

export default connect(mapStateToProps)(Intro);