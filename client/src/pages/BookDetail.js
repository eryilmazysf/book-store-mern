import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail({}) {
  let params = useParams();
  console.log(params.id);
  return <div>Books Details</div>;
}
