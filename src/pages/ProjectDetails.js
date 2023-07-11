import React from "react";
import { useParams } from "react-router-dom";
import {data} from '../temp/Data';
import DetailComp from "../components/DetailComp";
import BidForm from "../components/BidForm";
import '../style/MainStyle.css';

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(data[id])

  return (
    <>
        <DetailComp project={data[id]}/>
        <BidForm />
    </>
  );
};

export default ProjectDetails;
