import React from 'react'
import Axios from 'axios';
import './Articles.css';
import { Button } from 'react-bootstrap';
import Styled from 'styled-components';
import {Card} from 'react-bootstrap';



class Articles extends React.Component {
    // State will apply to the posts object which is set to loading by default
    state = {
        posts: [],
        loading: false,
        iconLoading: false,
        errors: null
    };
    // Now we're going to make a request for data using axios
    getPosts() {
      Axios.get("https://jsonplaceholder.typicode.com/posts")
        // Once we get a response and store data, let's change the loading state
        .then(response => {
          this.setState({
            posts: response.data,
            isLoading: false
          });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
      this.getPosts();
    }
    enterLoading = () => {
        this.setState({ loading: true });
      }
    
      enterIconLoading = () => {
        this.setState({ iconLoading: true });
      }
    // Putting that data to use
    render() {
      const { isLoading, posts } = this.state;
      const Container = Styled.div`
    width:85%;
    margin:0 auto;
    
`;

      return (
        <Container >
            <React.Fragment  >
                <h2>Liste des Articles :</h2>
                <div>
                {!isLoading ? (
                    posts.map(post => {
                    const { id, title, body } = post;
                    return (
                      <Card key={id} className="align-items-right">
                        <Card.Header>Article {id} :</Card.Header>
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>
                          {body}
                          </Card.Text>
                          <Button href={'/article/' + id} variant="primary">Lire la suite ...</Button>
                        </Card.Body>
                      </Card>
                        
                    );
                    })
                ) : (
                  
                    <Button variant="primary"
                    disabled>
                    Loading
                    </Button>
                )}
                </div>
            </React.Fragment>
        </Container>
      );
    }
  }
  export default Articles;