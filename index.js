const rootContainer = document.getElementById("root");
const name = "Promita";
const className = "greetings";

const user = { firstName: "Promita", lastName: "Good Morning" };
const fullName = (user) => {
  return user.firstName + " " + user.lastName;
};
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}!!</h1>
    <p className="description">Good To See You</p>
  </div>
);
ReactDOM.render(element, rootContainer);
