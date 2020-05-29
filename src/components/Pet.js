import React from 'react'

class Pet extends React.Component {
  handleAdopt = (pet)=>{
    if (pet.isAdopted) {
      return(
        <div className="extra content">
           <button className="ui disabled button">Already adopted</button>
        </div>
      )
      
    } else {
      return (
        <div className="extra content">
         <button  onClick={() => this.props.onAdoptPet(pet.id)} className="ui primary button">Adopt pet</button>
        </div>
      )
      
    }
   

  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/* OR  */}
            {this.props.pet.gender === 'male' ? '♂' : '♀' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
       {this.handleAdopt(this.props.pet)}   
      </div>
    )
  }
}

export default Pet
