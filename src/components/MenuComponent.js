import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardBody} from 'reactstrap';
import { Fade } from 'react-animation-components';


class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="masthead2"></div>
                <div className="container" id="menu">
                    <Fade in timeout={600}>
                        <div class="row">
                            <div className="col-md-2 m-1" >
                                <Card>
                                    <CardBody>Our Lunch</CardBody>
                                </Card>
                            </div>
                            <div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://img.taste.com.au/W0FaxqPV/w643-h428-cfill-q90/taste/2021/03/sweet-potato-and-lentil-lasagne-170423-2.jpg" alt="lasagne" />
                                        <CardTitle>Lasagne -$18</CardTitle>
                                </Card>
                            </div>
                            <div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://static01.nyt.com/images/2015/01/07/dining/07COOKBOOKTWELVERECIPES2/07COOKBOOKTWELVERECIPES2-articleLarge.jpg" alt="braised chicken" />
                                        <CardTitle>Braised Chicken -$24</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://img.taste.com.au/qL-IFGZY/w643-h428-cfill-q90/taste/2018/08/17-minute-caesar-salad_1980x1320-140424-1.jpg" alt="salad" />
                                        <CardTitle>Salad -$16</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://cdn-anmik.nitrocdn.com/kQDttHBvkmdpAiIYLaxVOothBahVPiXD/assets/static/optimized/rev-da60ee6/wp-content/uploads/2021/05/gnocci.jpg" alt="gnocchi" />
                                        <CardTitle>Gnocchi -$18</CardTitle>
                                </Card>
                            </div>
                            <div className="col-md-2 m-1" >
                                <Card>
                                    <CardBody>Our Dinner</CardBody>
                                </Card>
                            </div>
                            
                            <div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHo-Yoyzcx5SJQ7-v2wtXYMJ5jeu83386-w&usqp=CAU" alt="pizza" />
                                        <CardTitle>Pizza -$22</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://cf.ltkcdn.net/cooking/images/std/202901-800x533r1-NYstrip.webp" alt="new york steak" />
                                        <CardTitle>New York Steak -$32</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://i.pinimg.com/564x/79/eb/da/79ebdafacee1d7bcba9e650af8c83481.jpg" alt="deep dish ziti" />
                                        <CardTitle>Deep Dish Ziti -$28</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://www.thespruceeats.com/thmb/TYjumeJn34AsBpK88ikds54mtRI=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/red-and-white-tortellini-481886-hero-01-8a13550533ae4477ba6979d5708d1f2a.jpg" alt="tortellini" />
                                        <CardTitle>Tortellini -$26</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                <CardBody>Our Desserts</CardBody>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://static01.nyt.com/images/2019/02/11/dining/11molten-lava-cake/ya-molten-lava-cake-articleLarge.jpg" alt="lava cake"/>
                                        <CardTitle>Lava Cake -$10</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://www.giallozafferano.com/images/229-22916/tiramisu-mascarpone-cheese-and-ladyfingers-dessert_1200x800.jpg" alt="tiramisu" />
                                        <CardTitle>Tiramisu -$12</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://santabarbaraca.com/wp-content/uploads/2019/06/Mcconnells_IceCream_PhotobyEricWolfinger_CourtesyofVisitSantaBarbara.jpg.jpg" alt="gelato" />
                                        <CardTitle>Gelato -$8</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://hips.hearstapps.com/amv-prod-tpw.s3.amazonaws.com/wp-content/uploads/2018/09/mocha-cannoli-1.jpg" alt="canoli" />
                                        <CardTitle>Canoli -$6</CardTitle>
                                </Card>
                            </div>
                            <div className="col-md-2 m-1" >
                                <Card>
                                <CardBody>Our Wines</CardBody>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://img1.10bestmedia.com/Images/Photos/385310/GettyImages-853128486_54_990x660.jpg" alt="merlot" />
                                        <CardTitle>Merlot -$30</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_19/3333146/200501-wine-al-1122.jpg" alt="fchardonnay" />
                                        <CardTitle>Chardonnay -$30</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://media.istockphoto.com/photos/red-wineglass-and-bottle-copy-space-picture-id1297401631?b=1&k=20&m=1297401631&s=170667a&w=0&h=6ZY_oidUVZWgmSwQ1k2Iuan7-MMy30p4JlDyzJFdMXQ=" alt="ruffino" />
                                        <CardTitle>Ruffino -$35</CardTitle>
                                </Card>
                            </div><div className="col-md-2 m-1" >
                                <Card>
                                    <CardImg src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F03%2Fitaly-wine-cheese-coronavirus-FT-BLOG0320.jpg&q=85" alt="brunello" />
                                        <CardTitle>Brunello -$35</CardTitle>
                                </Card>
                            </div>
                        </div>
                    </Fade>
                </div>
            </React.Fragment>
        )
    }
}

export default Menu;