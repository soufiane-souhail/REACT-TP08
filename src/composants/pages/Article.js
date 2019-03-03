
import React from 'react'
import Axios from 'axios';
import Styled from 'styled-components'
import './Article.css'
import manager from './manager.svg'


class Article extends React.Component {
    // State will apply to the posts object which is set to loading by default
    state = {
      comments:[],
      id:null,
      title :null,
      body :null,
      isLoading: true,
      errors: null
    };
    
    // Now we're going to make a request for data using axios
    getPosts() {
        

      Axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.articleid)
        // Once we get a response and store data, let's change the loading state
        .then(response => {
          this.setState({
            id :response.data.id,
            title: response.data.title,
            body:response.data.body,
            isLoading: false
          });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    getComments() {
        

      Axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.articleid+"/comments")
        // Once we get a response and store data, let's change the loading state
        .then(response => {
            this.setState({
              comments: response.data,
              isLoading: false
            });

          
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
      this.getPosts();
      this.getComments();
    }
    // Putting that data to use
    render() {
      const { isLoading, comments,title,body } = this.state;
      const Containerr = Styled.div`
        width:85%;
    margin:0 auto;
    font-family: inherit;
`;
      return (
        <Containerr>
          <React.Fragment>
            <h2>Post {this.props.articleid}</h2>
            <div className="post" >
              {!isLoading ? (
                    <div >
                      <h2 className="title">{title}</h2>
                      <p>{body}</p>
                    </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </React.Fragment>
          <React.Fragment >
                <h2>Liste des comments :</h2>
                <div className="flexx">
                {!isLoading ? (
                    comments.map(post => {
                    const { postId,name, email, body } = post;
                    if(parseInt(this.state.id,10)===parseInt(postId,10)){
                    return (
                        <div>
                          <div key={postId} className="AComment" >
                            <div className="cord">
                              <img src={manager} alt="png" className="image"/>
                              <h2 className="name">{name}</h2>
                              <h2 className="email">{email}</h2>
                            </div>
                            <div className="bodyy">
                              <p >{body}</p>
                            </div>
                          </div>
                          
                        </div>
                    );
                    }
                    
                    })
                ) : (
                    <h3>Loading</h3>
                )}
                </div>
            </React.Fragment>
        </Containerr>
      );
    }
  }
  export default Article;
