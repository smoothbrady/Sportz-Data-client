import { useEffect, useState } from "react"
import { Card, Col, Container } from "react-bootstrap"
import { nflShow } from "../api/sport"
import Row from "react-bootstrap/Row"

const backgroundCSS = {
    backgroundColor: 'rgb(212, 212, 212)',
    // backgroundColor: 'rgb(120, 219, 111)',
    display: 'flex',
    justifyContent: 'center',
    // height: '100rem'
}

const cardCSS = {
    marginTop: '20px',
    marginBottom: '20px',
    width: '25rem',
    // height: '35rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '2.5%',
}

const col1Style = {
    paddingLeft: '5rem'
}

const cardHeader = {
    fontFamily: 'Bungee Inline',
    // backgroundColor: 'rgb(241, 50, 50)',
    // color: 'white'
}

const boldText = {
    fontWeight: 'bold'
}


const NflShow = ({ data, msgAlert }) => {

    const [nfl, setNfl] = useState(null)

    useEffect(() => {
        nflShow(data)
            .then((res) => {
                setNfl({
                    conference: res.data.results.conference,
                    division: res.data.results.division,
                    league: res.data.results.league
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failure to show conferences ' + error,
                    variant: 'danger'
                })
            })
    }, [])

    return (
        <>
            <div style={backgroundCSS}>
                <Container className="fluid">
                    <Row>
                        <Col style={col1Style}>
                            <Card style={cardCSS}>
                                <Card.Header style={cardHeader}>
                                    <h4 style={boldText}>{nfl.conference}</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div>
                                            <small><span style={boldText}>Conference:</span> {nfl.conference}</small>
                                            <small><span style={boldText}>Division:</span> {nfl.division}</small>
                                            <small><span style={boldText}>League:</span> {nfl.league}</small>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NflShow