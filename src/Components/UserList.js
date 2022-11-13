function UserList(props) {
    return props.isLoading ? (
      <h1>Loading...</h1>
    ) :
    
    ( 
      props.listOfUSer.map((el) => (
        
          <div className='user'>
          <h6 >
            {el.name} <br /> {el.email} <br /> {el.company.name}
          </h6>
          </div>
      

      ))
    
    );
  }
  
  export default UserList;