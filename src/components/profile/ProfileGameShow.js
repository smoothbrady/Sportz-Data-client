import { useEffect, useState } from "react"
import { Card, Container } from "react-bootstrap"
import { localGameShow } from "../../api/game"
import { removeFromBookmarks, addToBookmarks } from "../../api/profile"

const ProfileGameShow = (props) => {

    const [game, setGame] = useState(null)
    const {user, msgAlert, gameId} = props
    // const [sport, setSport] = useState(null)
    useEffect(() => {
        localGameShow(user, gameId)
            .then((res) => {
                setGame(
                    res.data.results
                )
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failure to show games ' + error,
                    variant: 'danger'
                })
            })
    })

    return(
        <>
            <div>
                <Container>
                    <Card style={cardCSS}>
                        <Card.Body>
                            <Card.Text>
                                <div>
                                    <h1 style={boldText}>{result.summary}</h1>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    )
}