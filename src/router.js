import React from 'react'
import {BrowserRouter as Router,Switch , Route , Redirect} from 'react-router-dom'

import Layout from './composants/Template/Layout'
import Home from './composants/pages/Home'
import Apropos from './composants/pages/Apropos'
import Articles from './composants/pages/Articles'
import Article from './composants/pages/Article'
import Offres from './composants/pages/Offres'

export default () =>(
    <Router>
        <Switch>
            <Redirect from="/" exact to="/home"/>

            <Route path='/home' exact component={()=><Layout><Home/></Layout>}/>
            <Route path='/articles' exact component={()=><Layout><Articles/></Layout>}/>
            <Route path='/a-propos-de-nous' exact component={()=><Layout><Apropos/></Layout>}/>
            <Route path='/article/:id' exact component={(props)=><Layout><Article articleid={props.match.params.id}/></Layout>}/>
            <Route path='/nos-offres' exact component={()=><Layout><Offres/></Layout>}/>

            <Route render={()=>(
                <Layout>
                    <h1>ERROR 404</h1>
                    <p>La page que vous demandez est introuvable</p>
                </Layout>
            )}/>

        </Switch>
    </Router>
)
