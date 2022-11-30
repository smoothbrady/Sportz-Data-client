import { useEffect } from "react"
import { Card, Container } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { localTeamShow } from "../../api/team"

const TeamShow = (props) => {

    const [team, setTeam] = useState(null)
    const {user, msgAlert} = props

    useEffect(() => {
        localTeamShow(user, teamId)
            .then((res) => {
                setTeam(
                    res.data.results
                )
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failure to show game ' + error,
                    variant: 'danger'
                })
            })
    })

    if (!team) {
        return (
            <>
                <div style={backgroundCSS}>
                    <Container style={findingResult}>
                        <p>Finding team</p>
                        <p>
                            <Spinner animation='border' style={spinnerCSS}>
                            </Spinner>
                        </p>
                    </Container>
                </div>
            </>
        )
    }

    return (
        <>
            <div style={backgroundCSS}>
                <Container className="fluid">
                    <Card style={cardCSS}>
                        <Card.style style={CardHeader}>
                            <h3 style={boldText}>{ results.team }</h3>
                        </Card.style>
                        <Card.Body>
                            <Card.Text>
                                <div>
                                    <small><span style={boldText}>Team:</span>{results.team}</small>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    )
}