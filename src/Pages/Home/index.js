import defaults from "nodemon/lib/config/defaults";
import React from "react";

function Home() {
    return (
<div>
        <div className="App-header">
            <h2>This is the place for Home</h2>
            <p>This blog is a set place for all the random stories and blog entries
                I am making sure this text shows up somewhere. It seems like every div could have it's own component so it'd be stylized in some way without having to do it a million times.
                Please keep reading as that was major nonsense and I'm not likely to repeat it again.
            </p>
        </div>
</div>
    );
}
export default Home;
console.log(Home);