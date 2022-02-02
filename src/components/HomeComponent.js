import React from 'react';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
import { Jumbotron } from 'reactstrap';


function Home({isLoading, errMess}) {

    const styleObj = {
        fontSize: 60,
        fontStyle: "italic",
        color: "black",
        textAlign: "center",
    }

    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
    return (
        <React.Fragment>

                <Jumbotron className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 text-center">
                                <h1 class="fw-light" id="amore">Amore</h1>
                                <p class="lead" id="desc">Classic food that will make you fall in love all over again.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            <div className="container">
                <div className="row">
                    <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(50%)'}} className="about">
                        <div className="col-md m-1">
                            <h4 style={styleObj}>About Us</h4>
                            <p className="story" style={{textAlign: "center"}}>Donec at condimentum nisi. Praesent non metus eget turpis auctor elementum vitae eget lorem. Sed et ultricies odio. Nam hendrerit purus a tellus mollis dictum in nec massa. Mauris molestie, enim id fringilla efficitur, ante nunc dapibus ligula, sed fringilla tortor elit eget velit. Praesent at quam felis. Nam consectetur tempor placerat. Nulla in vestibulum leo. Vestibulum mattis magna eu nibh vehicula, eu hendrerit felis hendrerit. Sed non nisl arcu. Proin vel erat eget nibh accumsan iaculis eget id tellus. Nunc bibendum ac est id dictum. Aenean blandit tempor nulla ut lobortis.</p>
                        </div>
                    </FadeTransform>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;   