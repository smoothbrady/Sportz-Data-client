// import { useEffect, useState } from "react"
// import { Card, Container } from "react-bootstrap"
// import CardHeader from "react-bootstrap/esm/CardHeader"
// import { localTeamShow } from "../../api/team"
// import { addToBookmarks, removeFromBookmarks } from "../../api/profile"
// import Spinner from "react-bootstrap/Spinner"
// import { Button } from "react-bootstrap"

// const spinnerCSS = {
//     marginLeft: '15%',
// }

// const backgroundCSS = {
//     width: "50rem"
// }

// const findingResult ={

// }

// const cardCSS = {

// }

// const boldText =  {

// }



// const TeamShow = (props) => {

//     const [team, setTeam] = useState(null)
//     const {user, msgAlert, teamId} = props

//     const removeFromMyLibrary = () => {
//         removeFromBookmarks(user)
//             .then((res) => {
//                 setUser(res.data.user)
//             })
//             .then(() => {
//                 msgAlert({
//                     heading: 'Success',
//                     message: 'Removed team from your library',
//                     variant: 'success'
//                 })
//             })
//             .catch((error) => {
//                 msgAlert({
//                     heading: 'Failure',
//                     message: 'Failed to remove team from your Library' + error,
//                     variant: 'danger'
//                 })
//             })
//     }

//     const addToLibrary = () => {
//         addToBookmarks(user, team)
//             .then((res) => {
//                 setUser(res.data.user)
//             })
//             .then(() => {
//                 msgAlert({
//                     heading: 'Success',
//                     message: 'Added team to your library',
//                     variant: 'success'
//                 })
//             })
//             .catch((error) => {
//                 msgAlert
//             })
//     }

//     useEffect(() => {
//         localTeamShow(user, teamId)
//             .then((res) => {
//                 setTeam(
//                     res.data.results
//                 )
//             })
//             .catch((error) => {
//                 msgAlert({
//                     heading: 'Failure',
//                     message: 'Failure to show game ' + error,
//                     variant: 'danger'
//                 })
//             })
//     }, [])

//     if (!team) {
//         return (
//             <>
//                 <div style={backgroundCSS}>
//                     <Container style={findingResult}>
//                         <p>Finding team</p>
//                         <p>
//                             <Spinner animation='border' style={spinnerCSS}>
//                             </Spinner>
//                         </p>
//                     </Container>
//                 </div>
//             </>
//         )
//     }


//     return (
//         <>
//             <div style={backgroundCSS}>
//                 <Container className="fluid">
//                     <Card style={cardCSS}>
//                         <Card.style style={CardHeader}>
//                             <h3 style={boldText}>{ team.name }</h3>
//                         </Card.style>
//                         <Card.Body>
//                             <Card.Text>
//                                 <div>
//                                     <small><span style={boldText}>Team:</span>{team.name}</small>
//                                 </div>
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Button onClick={() => removeFromMyLibrary()} className ="btn-success m-1">Remove From Bookmarks</Button>
//                             <Button onClick={() => addToLibrary()} className ="btn-success m-1">Add to</Button>
//                         </Card.Footer>
//                     </Card>
//                 </Container>
//             </div>
//         </>
//     )
// }

// export default TeamShow