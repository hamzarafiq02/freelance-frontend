import React from "react";
import Card from 'react-bootstrap/Card';
import { FaRegClock } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import '../style/MainStyle.css';

const DetailComp = ({project}) => {
  
    return (
      <Card className="project-card mb-4 cards">
          <Card.Body>
              <div className="border-bottom">
                  <Card.Title>{project.title}</Card.Title>
              </div>
              <div className="border-bottom">
                  <h3>project Description:</h3>
                  <Card.Text className="mb-3 card_detail_des">{project.description}</Card.Text>
              </div>
              <div>
                  <div className='d-flex mar-y'>
                      <p className="rm_pad_mar bold sl_mar">Client Name:</p>
                      <BsFillPersonFill className="project-card-icon" />
                      <Card.Subtitle className="mb-2 text-muted">{project.client_name}</Card.Subtitle>
                  </div>
                  <div className="d-flex mar-y">
                      <p className="rm_pad_mar bold sl_mar">Budget:</p>
                      <MdAttachMoney className="project-card-icon" />
                      <div>{project.budget}</div>
                  </div>
                  <div className="d-flex mar-y">
                      <p className="rm_pad_mar bold sl_mar">Deadline:</p>
                      <FaRegClock className="project-card-icon" />
                      <div>{new Date(project.deadline).toLocaleDateString()}</div>
                  </div>
                  <div className="d-flex mar-y">
                      <p className="rm_pad_mar bold sl_mar">Total Bids:</p>
                      <div>{project.num_bid}</div>
                  </div>
  
              </div>
          </Card.Body>
      </Card>
    );
  };
  
  export default DetailComp;
  