import React  from 'react';

import {Total,Mens} from './TPS'

class TP extends React.Component{
    constructor(props){
        super(props);
        this.state={
            montant:null,
            inter:null,
            duree:null,
            total:null,
            mensualite:null



            
        };
    }
    componentWillMount(){
         let montant=0;
         let inter = 0;
         let duree = 0;
         let total = 0;
         this.setState({montant,inter,duree,total});
    }

    /*----------------Function---------------------*/
    getmontant=(event)=>{
        let inter=this.state.inter;
        this.setState({montant:parseFloat(event.target.value)})
        this.setState({total:((parseFloat(inter)/100)*parseFloat(event.target.value))+parseFloat(event.target.value)})
        if(event.target.value==""){
            let inter=this.state.inter;
            this.setState({total:0+parseFloat(inter)})
            this.setState({montant:0})
        }
        if(event.target.value=0){
            this.setState({total:parseFloat(this.state.inter)})
        }
    }
    getinter=(event)=>{
        
        let montant=this.state.montant;
        this.setState({inter:parseFloat(event.target.value)})
        this.setState({total:((parseFloat(event.target.value)/100)*parseFloat(montant))+parseFloat(montant)})
        if(event.target.value==""){
            let montant=this.state.montant;
            this.setState({inter:0})
            this.setState({total:0+parseFloat(montant)})
        }
        if(montant=0){
            let montant=this.state.montant;
            this.setState({total:((parseFloat(event.target.value)/100)*parseFloat(montant))+parseFloat(montant)})
        }

    }
    getduree=(event)=>{
        this.setState({duree:event.target.value})
        let total = this.state.total;
        this.setState({mensualite:parseFloat(total)/parseFloat(event.target.value)})

    }
    ttotal=()=>{
        let montant=this.state.montant;
        let inter=this.state.inter;
        this.setState({total:parseFloat(montant)*parseFloat(inter)})
        
    }
    gettotal=(event)=>{
        this.setState({total:event.target.value})
    }
    /*------
    -------------------------------------*/

    /*Asychron
    this.setState{[e.target.name],val},()
     */
    

    render(){
        return(
            <React.Fragment>
                <div style={{  }}>
                    <input placeholder = "Saisir montant" type="number" value={this.state.montant} min = {20000}onChange={this.getmontant}/>
                    <input placeholder = "Interets (%)" type="number" value={this.state.inter} onChange={this.getinter}/>
                    <input placeholder = "Duree" type="number" value={this.state.duree} max={12}onChange={this.getduree}/>
                </div>
                <h6>Total crédit : <Total total={this.state.total} /></h6>
                <h6>Mensualité : <Total total={this.state.mensualite} /> / mois</h6>
            </React.Fragment>
            
        )
    }
}
export default TP;
