const Notification = props => {
    const {className,message,iconUrl}=props;
    return(
        <div className={`Notification-container ${className}`}
            <img src={iconUrl}/>
            <p>{message}</p>
        </div>
    );
};

const element = (
  <div className="container1">
      <div className="container2">
        <h1 class="heading1">Notification</h1>
        <div className="container3">
            <Notification className="information" message="Information Message" iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
            <Notification className="success" message="Success Message" iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
            <Notification className="warning" message="Warning Message" iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
            <Notification className="error" message="Error Message" iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
        </div>
      </div>
  </div>   
);

ReactDOM.render(element, document.getElementById("root"))
