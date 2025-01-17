
import React from 'react';

class AddItem extends React.Component{

     constructor(props){
        super(props);
        this.state = {
          productName :"",
          productPrice:0,
        };
      }
    render(){
        return <form className='row' onSubmit={(e) =>{
          e.preventDefault();
          this.props.addItem(this.state.productName,this.state.productPrice);
        }}>
      
        <div className=" col-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            name="productName"
            onChange={(e) =>{
              this.setState({productName : e.currentTarget.value});
            }}
            value={this.state.productName}
          />
        </div>
        <div className=" col-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) =>{
              this.setState({productPrice : Number(e.currentTarget.value)});
            }}
            value={this.state.productPrice}
          />
        </div>         
        <button type="submit" className="btn btn-primary col-2">
          Add
        </button>

      </form>
      

            
    }
}

export default AddItem;