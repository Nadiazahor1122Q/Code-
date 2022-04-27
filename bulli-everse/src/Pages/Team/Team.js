import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Team.css";
import ReactGA from 'react-ga';

class Register extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview('/team');
    this.state = {
    navBarPosition:'black',
     teamHead:[
       {img:'srini.png', name:'Srini Anala', position:'Co-Founder | CEO', description:'Held numerous leadership roles in Engineering and Operations at Goldman, UBS, Capital one and Reuters and delivered multi-billion dollar fintech products. Founded Cognitochain - Enterprise blockchain. Received awards and acclaims for implementing the tech that could benefit millions of unbanked.'},
       {img:'murali.png', name:'Murali Reddy', position:'Co-Founder | COO', description:'Serial entrepreneur with over a decade of extensive experience in leading and nurturing high performance teams in finance at Oracle, IBM and Yodlee. He is incharge of making sure our operations run smoothly and efficiently.  Blockchain Keynote speaker, Cryptographer and Leadership Coach.'},
       {img:'sanjit.png', name:'Sanjit Daniel', position:'Head of Game Eng.', description:'20 years of hard-core programming experience in C++, OpenGL, DirectX and Real-time 3D Graphics including engine architecture and GPU / Shader programming, VR/AR/MR. Previously worked in companies like Sony R&D and Hadean.'},
       {img:'arun.png', name:'Arun Krishnakumar', position:'Chief Growth Officer', description:'Over 18 years experience that includes tech, financial services, consulting & venture capital. An author of two books, including one on Blockchain and Quantum Computing. Has founded and deployed two VC funds and held board positions. Holds a Masters from LSE and P.G diploma from the University of Oxford.'},
     ],
     teamMembers:[
       {img:'Carlo.png', name:'Carlo Pascoli', position:'Sr Blockchain Engineer'},
       {img:'Dominik.png', name:'Dominik Sipowicz', position:'Principal Soft. Engineer'},
       {img:'Rahul.png', name:'Rahul Yadav', position:'Lead UI Engineer'},
       {img:'Vamsi.png', name:'Vamsi Krishna', position:'Software Architect'},
       {img:'Pradeep.png', name:'Pradeep Rachumalla', position:'Head of Quality'},
       {img:'Niraj.png', name:'Niraj Bhattarai', position:'Blockchain Dev.'},
       {img:'Shamil.png', name:'Shamil Rahman', position:'Lead UX Designer'},
       {img:'Heramb.png', name:'Heramb Kinikar', position:'Product Design Lead'},
       {img:'Nicolas.png', name:'Nicolas Roe', position:'Unreal Developer'},
       {img:'Arjun.png', name:'Arjun Dey', position:'Unreal Developer'},
       {img:'Chandan.png', name:'Chandan Nale', position:'Lead Artist'},
       {img:'Shirdi.png', name:'Shirdi Briceno', position:'3D Modeler'},
       {img:'Mavika.png', name:'Mavika Boyini', position:'Digital Illustrator'},
       {img:'Vishnu.png', name:'Vishnu Suresh', position:'Media Manager'},
       {img:'Neha.png', name:'Neha Dargar', position:'Digital Artist'},
       {img:'Arpan.png', name:'Arpan D Gupta', position:'Content Writer'},
       {img:'Mayank.png', name:'Mayank Nagre', position:'Jr. Environment Artist'},
       {img:'Shirsha.png', name:'Shirsha Biswas', position:'Jr. Concept Artist'},
       {img:'Purajit.png', name:'Purajit Sonowal', position:'Jr. Concept Artist'},
       {img:'Tejash.png', name:'Tejash Bhaladhare', position:'Jr. 3D Modeler'}
     ]
    };
  }

  componentDidMount() {}

  
  render() {
    return (
      <React.Fragment>
        <NavBar position={this.state.navBarPosition}/>

        <div className="teamSection">
        <div className="container">
          <div className="row titleSection">
            <div className="col-12">
              <div className="greenBorder"></div>
              <h2>Showing the light</h2>
            </div>
          </div>
          <div className="row teamHeadSection">
            {this.state.teamHead.map((member) => (
              <div className="col-12 col-md-3 mb-4">
                <div className="internalColumn">
                  <img src={'assets/team/'+member.img} />
                  <h1>{member.name}</h1>
                  <h6>{member.position}</h6>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row titleSection mt-4">
            <div className="col-12">
              <div className="greenBorder"></div>
              <h2>Burning the midnight oil</h2>
            </div>
          </div>
          <div className="row teamMembersSection">
            {this.state.teamMembers.map((member) => (
              <React.Fragment>
              <div className="col-6 col-md-2 mb-5">
                <div className="internalColumn">
                  <div className="imgSection">
                    <img src={'assets/team/'+member.img} />
                  </div>
                  <h1>{member.name}</h1>
                  <h6>{member.position}</h6>
                </div>
              </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;