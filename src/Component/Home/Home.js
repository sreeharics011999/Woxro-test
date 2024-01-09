import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"
import "./home.css"
import banner from "../images/banner.jpg"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import $ from "jquery"
let Home = () => {
    $(document).ready(function(){
        $(".bi-x-lg").click(function(){
            $(this).css("transform", "rotate(90deg)")
        })
    })
    return (
        <div className="home">
            <div className="close-btn-div">
                <p className="close-btn"><i class="bi bi-x-lg"></i></p>
            </div>
            <div className="container">
                <div className="home-top">
                    <h2 className="home-first-p">Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h2>
                    <div className="banner-img-div">
                        <img src={banner} className="banner-img" />
                    </div>
                    <div className="home-p-div">
                        <p className="home-second-p ">
                            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
                        </p>
                    </div>
                    <div className="website-btn-div">
                        <NavLink type="" className="web-btn btn btn-light">Visit Website</NavLink>
                    </div>
                    <div className="row row-1">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 col-xl-4" >
                            <div className="card">
                                <div className="card-img-div">
                                    <img src={img1} className="card-img" />
                                </div>
                                <p className="card-p">Explore large, destructible environments where no two games are ever the same.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 col-xl-4" >
                            <div className="card">
                                <div className="card-img-div">
                                    <img src={img2} className="card-img" />
                                </div>
                                <p className="card-p">Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 col-xl-4" >
                            <div className="card">
                                <div className="card-img-div">
                                    <img src={img3} className="card-img" />
                                </div>
                                <div className="card-p-div">
                                <p className="card-p">Discover even more ways to play across thousands of creator-made game genres</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="contribution">
                      <h3 className="contribution-h3">Our Contribution</h3>
                      <p className="contribution-p">Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
                    </div>
                    <div className="row row-1">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 col-xl-4" >
                            <div className="card-1">
                                <div className="card-1-img-div">
                                   <h3 className="card-1-h3">5M</h3>
                                </div>
                                <p className="card-1-p">Daily User Engagements</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 col-xl-4" >
                            <div className="card-1">
                                <div className="card-1-img-div">
                                   <h3 className="card-1-h3">$500K</h3>
                                </div>
                                <p className="card-1-p">Revenue Surge for an Platform</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 col-xl-4" >
                            <div className="card-1">
                                <div className="card-1-img-div">
                                   <h3 className="card-1-h3">10X</h3>
                                </div>
                                <p className="card-1-p">ROAS on all our marketing campaigns</p>
                            </div>
                        </div>
                    </div>
                    <div className="last-content">
         <h3 className="last-content-h3">Interested in delving deeper into the project?</h3>
         <p className="last-content-p">If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <NavLink to="" className="text-light">hello@abc.com</NavLink> or give us a call at <NavLink to="" className="text-light">+91 480 20802730</NavLink>.</p>
                    </div>
                    <div className="last-btn">
                     <NavLink to="" className="btn btn-outline-light">Ring us on skype</NavLink>
                     <NavLink to="" className="btn btn-light">Contact us</NavLink>
                    </div>
                    <div className="footer">
                       <p className="footer-p">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home