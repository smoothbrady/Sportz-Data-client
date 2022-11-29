// import { Button } from "react-bootstrap/Button";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { teamShow } from '../../api/team';

function team() {
    useEffect(() => {
        teamShow(user)
        .then(res => {
            setTeam(res.data.team)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Team Failure' + error,
                variant: 'danger'
            })
        })
    })
    return (
        <Card style={{ width: '19rem' }}>
            <Card.Img variant='top'
        src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Team Title</Card.Title>
          <Card.Text>
            team information
          </Card.Text>
          {/* <Button variant="primary">BOOKMARK</Button> */}
        </Card.Body>
      </Card>
    );
  }



  export default team;