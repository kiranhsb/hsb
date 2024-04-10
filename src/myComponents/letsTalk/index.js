/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import Navbar from "../navbar";
import { MdOutlineDone } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { MdVerified } from "react-icons/md";
import Footer from "../footer";
import "./index.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: false,
};

const reviewsList = [
    {
        rating: 5.0,
        review: "GeekyAnts shines because their human relationships meet their offering of top talent.",
        reviewPersonName: "Executive, Lumica"
    },
    {
        rating: 5.0,
        review: "GeekyAnts shines because their human relationships meet their offering of top talent.",
        reviewPersonName: "Executive, Lumica"
    },
    {
        rating: 5.0,
        review: "GeekyAnts shines because their human relationships meet their offering of top talent.",
        reviewPersonName: "Executive, Lumica"
    },
    {
        rating: 5.0,
        review: "GeekyAnts shines because their human relationships meet their offering of top talent.",
        reviewPersonName: "Executive, Lumica"
    },
    {
        rating: 5.0,
        review: "GeekyAnts shines because their human relationships meet their offering of top talent.",
        reviewPersonName: "Executive, Lumica"
    },
    {
        rating: 5.0,
        review: "GeekyAnts shines because their human relationships meet their offering of top talent.",
        reviewPersonName: "Executive, Lumica"
    }
]

class LetsTalk extends Component {
  render() {
    return (
      <div className="letstalkContainer">
        <Navbar />

        <div className="landingSection-letsTalk-Container">
          <div className="landingSection-letsTalk">
            <h1 className="sectionHeading-letsTalk">
              Build with Us. Accelerate your Growth.
            </h1>
            <div className="highlights-letsTalk">
              <div className="hightlightItem">
                <MdOutlineDone className="rightBullet" />
                <p className="higlight">Customized solutions and strategies</p>
              </div>
              <div className="hightlightItem">
                <MdOutlineDone className="rightBullet" />
                <p className="higlight">Faster-than-market project delivery</p>
              </div>
              <div className="hightlightItem">
                <MdOutlineDone className="rightBullet" />
                <p className="higlight">
                  End-to-end digital transformation services
                </p>
              </div>
            </div>
          </div>

          <div className="requestCallbackForm-container">
            <p className="formTitle">Schedule a Call</p>
            <form className="requestCallbackForm">
              <div className="inputFileds">
                <TextField
                  style={{ marginRight: "15px" }}
                  className="textInput"
                  id="outlined-basic"
                  label="Full Name*"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Email ID*"
                  variant="outlined"
                />
              </div>
              <TextField
                style={{
                  width: "100%",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
                id="outlined-basic"
                label="Company Name*"
                variant="outlined"
              />
              <FormControl style={{ marginBottom: "15px" }} fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Requirement
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem>UX/UI Design</MenuItem>
                  <MenuItem>Development</MenuItem>
                  <MenuItem>End to end solution</MenuItem>
                  <MenuItem>
                    Staff Augmentation (Designers, Developers, QA, BA, and more)
                  </MenuItem>
                </Select>
              </FormControl>
              <textarea
                placeholder="Write your expectations"
                rows={5}
                style={{
                  width: "100%",
                  border: "1.5px solid #C4C4C4",
                  borderRadius: "5px",
                  outline: "none",
                  padding: "16.5px",
                }}
              />
              <div>
                <input
                  className="requestcallback-checkbox"
                  type="checkbox"
                  id="copyOfNDA"
                />
                <label htmlFor="copyOfNDA">Send me a copy of NDA</label>
              </div>
              <div>
                <input
                  className="requestcallback-checkbox"
                  type="checkbox"
                  id="subscribe"
                />
                <label htmlFor="subscribe">
                  Subscribe to our Geeky Newsletter (We promise not to spam)
                </label>
              </div>
              <div>
                <input
                  className="requestcallback-checkbox"
                  type="checkbox"
                  id="acknowledge"
                />
                <label htmlFor="acknowledge">
                  Acknowledge and agree to our Privacy Policy*
                </label>
              </div>
              <button className="requestcallback-button" type="submit">
                REQUEST A CALLBACK
              </button>
            </form>
          </div>
        </div>

        <div className="recordsContainer">
          <div className="recordItem stretch">
            <p className="recordNumber">500+</p>
            <p className="recordTitle">Client Partnerships</p>
          </div>
          <div className="recordItem stretch">
            <p className="recordNumber">700+</p>
            <p className="recordTitle">Projects Delivered</p>
          </div>
          <div className="recordItem stretch">
            <p className="recordNumber">10+</p>
            <p className="recordTitle">Projects Delivered</p>
          </div>
          <div className="recordItem stretch">
            <p className="recordNumber">450+</p>
            <p className="recordTitle">Team Members</p>
          </div>
        </div>

        <div className="reviewsContainer">
            <h2 className="sectionHeading">We are Empowering Businesses to Lead their Industry</h2>
            <Slider {...settings}>
            {reviewsList.map((eachReview) => (
                <>
                    <div key={eachReview.id} className="reviewCard">
                        <div className="starsContainer-rating">
                            <p>{eachReview.rating}</p>
                            <Rating style={{color:"#E62415"}} name="read-only" value={5} readOnly />
                        </div>
                        <p className="rating">{`" ${eachReview.review} "`}</p>
                        <div className="verifiedReviewContianer">
                        <MdVerified className="verifiedIcon" />
                        <p className="verifiedReview">
                            Veirifed Review
                        </p>
                        </div>
                        
                    </div>
                </>
            ))}
          </Slider>
        </div>

        <Footer />
      </div>
    );
  }
}

export default LetsTalk;
